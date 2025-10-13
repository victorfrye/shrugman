terraform import azurerm_static_web_app.stapp /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Web/staticSites/stapp-shrugman

terraform import azurerm_static_web_app_custom_domain.apex /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Web/staticSites/stapp-shrugman/customDomains/shrugman.com

terraform import azurerm_static_web_app_custom_domain.www /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Web/staticSites/stapp-shrugman/customDomains/www.shrugman.com

terraform import azurerm_dns_zone.domain /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com

terraform import azurerm_dns_ns_record.name_servers /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com/NS/@

terraform import azurerm_dns_a_record.swa_alias /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com/A/@

terraform import azurerm_dns_cname_record.www /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com/CNAME/www

terraform import azurerm_dns_cname_record.bing /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com/CNAME/695375881672eb1acf001799e2f75000

terraform import azurerm_dns_txt_record.apex /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com/TXT/@

terraform import azurerm_dns_txt_record.bluesky /subscriptions/95e10bb1-25b8-47dd-b998-267d0af997d2/resourceGroups/rg-shrugman/providers/Microsoft.Network/dnsZones/shrugman.com/TXT/_atproto
