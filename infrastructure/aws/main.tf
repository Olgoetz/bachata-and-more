provider "aws" {
  region              = "eu-central-1"
  shared_config_files = ["~/.aws/credentials"]
}

data "aws_caller_identity" "current" {}
data "aws_region" "current" {}

resource "random_string" "lambda" {
  special = false
  length  = 5
}

locals {
  function_name = "bachata-and-more-email-proxy-${random_string.lambda.result}"
}

