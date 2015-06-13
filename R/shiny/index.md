---
title: Using  Shinny App to Get Rainfall and Temperature Climatology and Trend Over
  a Region Selected by the User
author: "Fisseha Berhane"
highlighter: highlight.js
output: pdf_document
job: PhD Candidate at Johns Hopkins University
knit: slidify::knit2slides
mode: selfcontained
hitheme: default
subtitle: Data products project
framework: io2012
widgets: []
---



 <h1>Application Summary </h1>

 . This application uses rainfall and temperature data from the Climate Research Unit (http://www.cru.uea.ac.uk/) and calculates monthly climatology and trend of rainfall or temperature over a rectangular region selected by the user. 
> * The region to be selected is made rectangular for simplicity for the user as clicking any two opposite corners is enough to create a rectangular region. 
> * The App also helps to quickly check how climate is changing over a given region or country.

> * Shiny Appliaction: https://www.shinyapps.io/admin/#/application/39582


>  <h1>To use the App </h1> 
 > * Choose temperature or rainfall from the 'choose a dataset' input control on the top left of the sidebar of the app. 
> *  Click two coordinate points on the map of the climatology shown. The rectangular region must be on the landmass (the data is for land areas only).


--- .class #id 

. One can see the results for the region selected by clicking the tabPanels at the bottom in the app. The data can also be downloaded from the sidebar of the app by choosing a format of interest.

 <h1>Algorihtm Summary </h1> 
 
First, the app produces map of average precipitation as a default (however, the user can select temperature dataset as well). The code produces the map of long term mean shown below. The code is hidden to save space.


```
## Loading required package: sp
## Checking rgeos availability: TRUE
## Loading required package: spam
## Loading required package: grid
## Spam version 1.0-1 (2014-09-09) is loaded.
## Type 'help( Spam)' or 'demo( spam)' for a short introduction 
## and overview of this package.
## Help for individual functions is also obtained by adding the
## suffix '.spam' to the function name, e.g. 'help( chol.spam)'.
## 
## Attaching package: 'spam'
## 
## The following objects are masked from 'package:base':
## 
##     backsolve, forwardsolve
## 
## Loading required package: maps
```

```
## Error in open.ncdf("C:/Fish/classes/spring_2015/Developing_Data_Products/Data_products_project/version2/project/data//cru_africaPre80_13.cdf"): Error in open.ncdf trying to open file C:/Fish/classes/spring_2015/Developing_Data_Products/Data_products_project/version2/project/data//cru_africaPre80_13.cdf
```

```
## Error in get.var.ncdf(pre.nc, "PRE"): object 'pre.nc' not found
```

```
## Error in eval(expr, envir, enclos): object 'pre.nc' not found
```

```
## Error in eval(expr, envir, enclos): object 'pre.nc' not found
```

```
## Error in eval(expr, envir, enclos): object 'pre.nc' not found
```

```
## Error in apply(pre, c(1, 2), mean): object 'pre' not found
```

```
## Error in imagePlotInfo(..., breaks = breaks, nlevel = nlevel): object 'lon' not found
```

```
## Error in polypath(x = mcrds[, 1], y = mcrds[, 2], border = border, col = col, : plot.new has not been called yet
```

--- .class #id 

observeEvent() function is used to handle clicks on the plot of the climatology map shown after selecting a dataset of interest.
The reactiveValues() is used for storing the latitude and longitude coordinates of the selected regions.
```
v <- reactiveValues(
    click1 = NULL,  # Represents the first mouse click, if any
    range = NULL    # After two clicks, this stores the latitude and longitude of the selcetd region)
  # Handle clicks on the plot
  observeEvent(input$plot_click, {
    if (is.null(v$click1)) { # We don't have a first click, so this is the first click
      v$click1 <- input$plot_click
    } else { # We already had a first click, so this is the second click.
      # Make a range (longitude1 latitude1: longitude2 latitude2) from the previous click and this one.
      v$range <- c(v$click1$x,v$click1$y, input$plot_click$x,input$plot_click$y) # x and y are longitude and latitude
      # And clear the first click so the next click starts a new range.
      v$click1 <- NULL }})
  observeEvent(input$reset, {
    # Reset both the range and the first click, if any.
    v$range <- NULL
    v$click1 <- NULL})
```
 Shiny Appliaction: https://www.shinyapps.io/admin/#/application/39582
  

--- .class #id

<h1>Example Display </h1> 
If we select a rectangular region that covers the Ethiopian highlands for example, we get the precipitation climatology and trend shown below. (codes hidden as space is not enough to include them). The user can select any region and either temperature or rainfall dataset.


```
## Error in open.ncdf("C:/Fish/classes/spring_2015/Developing_Data_Products/Data_products_project/version2/project/data//cru_africaPre80_13.cdf"): Error in open.ncdf trying to open file C:/Fish/classes/spring_2015/Developing_Data_Products/Data_products_project/version2/project/data//cru_africaPre80_13.cdf
```

```
## Error in get.var.ncdf(pre.nc, "PRE"): object 'pre.nc' not found
```

```
## Error in apply(pre[108:120, 76:86, ], 3, mean): object 'pre' not found
```

```
## Error in matrix(clim1, nrow = 12, ncol = 34): object 'clim1' not found
```

```
## Error in apply(month, 1, mean): object 'month' not found
```

```
## Error in plot(monthly, type = "o", col = "blue", lwd = 3, ylab = ylab1, : error in evaluating the argument 'x' in selecting a method for function 'plot': Error: object 'monthly' not found
```

```
## Error in axis(1, labels = FALSE): plot.new has not been called yet
```

```
## Error in text.default(1:12, par("usr")[1] + (min(monthly) + max(monthly))/2, : object 'monthly' not found
```

```
## Error in apply(month, 2, mean): object 'month' not found
```

```
## Error in eval(expr, envir, enclos): object 'annual' not found
```

```
## Error in plot(annual, type = "l", col = "blue", xaxt = "n", xlab = " ", : error in evaluating the argument 'x' in selecting a method for function 'plot': Error: object 'annual' not found
```

```
## Error in lines(fit$fitted.values, type = "l", col = "red", xaxt = "n", : object 'fit' not found
```

```
## Error in axis(1, at = at, las = 2, hadj = 0.9, labels = FALSE): plot.new has not been called yet
```

```
## Error in xy.coords(x, y): object 'annual' not found
```

```
## Error in text.default(seq(1, 34, 3), par("usr")[1] + (min(annual) + max(annual))/2, : object 'annual' not found
```


