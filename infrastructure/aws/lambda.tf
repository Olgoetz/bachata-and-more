
## LOGGING
resource "aws_cloudwatch_log_group" "lambda" {
  name = "/aws/lambda/${local.function_name}"
  retention_in_days = 3
}


## LAMBDA

data "archive_file" "lambda" {
  type = "zip"
  source_dir = "${path.module}/source"
  output_path = "${path.module}/${local.function_name}.zip"
  output_file_mode = "0666"
}

resource "aws_iam_role" "lambda" {
  name = "${local.function_name}-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Sid    = ""
        Principal = {
          Service = "lambda.amazonaws.com"
        }
      },
    ]
  })
}

resource "aws_iam_role_policy_attachment" "lambda" {
    role = aws_iam_role.lambda.name
    policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "lambda" {
    description = "Proxies requests to the email API."
  filename      = data.archive_file.lambda.output_path
  function_name = local.function_name
  role          = aws_iam_role.lambda.arn
  handler       = "main.handler"

  source_code_hash = data.archive_file.lambda.output_base64sha256

  runtime = "python3.8"

    environment {
        variables = {
            STAGE = var.api_stage
            API_URL = var.api_url
            API_KEY = var.api_key
        }
    }

}


resource "aws_lambda_permission" "api_lambda_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.lambda.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_api_gateway_rest_api.api_gateway.execution_arn}/*/*/*"
}

