terraform {
  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 1.0"
    }
  }
}


resource "vercel_project" "this" {
  name                       = "bachata-and-more"
  framework                  = "nextjs"
  serverless_function_region = "fra1"

  git_repository = {
    type              = "github"
    repo              = "Olgoetz/bachata-and-more"
    production_branch = "prod"
  }

  vercel_authentication = {
    deployment_type = "none"
  }

}

resource "vercel_project_domain" "prod" {
  project_id           = vercel_project.this.id
  domain               = "bachata-and-more.de"
  redirect             = vercel_project_domain.prod2.domain
  redirect_status_code = 308
}

resource "vercel_project_domain" "prod2" {
  project_id = vercel_project.this.id
  domain     = "www.bachata-and-more.de"
}


resource "vercel_project_environment_variable" "resend" {
  project_id = vercel_project.this.id
  key        = "RESEND_API_KEY"
  value      = var.RESEND_API_KEY
  target     = ["development", "preview", "production"]
}
