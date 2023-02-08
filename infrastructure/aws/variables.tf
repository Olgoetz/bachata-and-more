variable "api_stage" {
  type        = string
  description = "Stage of the api gateway"
  default     = "dev"
}

variable "api_key" {
  type        = string
  sensitive   = true
  description = "API key for accessing the email API"
}

variable "api_url" {
  type        = string
  sensitive   = true
  description = "URL of the email API"
}