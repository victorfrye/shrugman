terraform {
  required_providers {
    azurerm = {
      source  = "azurerm"
      version = "~> 4.47"
    }
  }

  backend "azurerm" {
    resource_group_name  = "rg-tfstate"
    storage_account_name = "stvftfscus"
    container_name       = "shrugman"
    key                  = "terraform.tfstate"
  }
}

provider "azurerm" {
  features {}
}

data "azurerm_resource_group" "shrugman" {
  name = var.rg_name
}

data "azurerm_client_config" "current" {}

locals {}
