# MARK: Solution

variable "application_name" {
  description = "The name of the application."
  type        = string
  default     = "shrugman"
}

variable "rg_name" {
  description = "The name of the resource group."
  type        = string
  default     = "rg-shrugman"
}

# MARK: Azure Static Web App

variable "swa_sku" {
  description = "The SKU for the Static Web App."
  type        = string
  default     = "Free"
}

# MARK: Azure DNS

variable "domain_name" {
  description = "The domain name for the DNS zone."
  type        = string
  default     = "shrugman.com"
}

variable "bing_validation_token" {
  description = "The Bing validation token."
  type        = string
  default     = "695375881672eb1acf001799e2f75000"
}

variable "google_validation_token" {
  description = "The Google validation token."
  type        = string
  default     = "google-site-verification=KgaFLeVgLX0J2m_d4O9QPxaDZgUzQayG6OLhn3HlrT8"
}

variable "bluesky_validation_token" {
  description = "The Bluesky validation token."
  type        = string
  default     = "did=did:plc:7shem2xit2d2ip5ek4gqyxnl"
}
