provider "google-beta" {
  project = "bachata-and-more"
  region  = "eu-central1"
}


resource "google_project" "this" {
  name       = "bachata-and-more"
  project_id = "bachata-and-more-372517"

}
resource "google_firebase_project" "this" {
  provider = google-beta
  project  = google_project.this.project_id
}
