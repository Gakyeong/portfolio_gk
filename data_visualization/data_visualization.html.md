---
title: "Data Visualization"
subtitle: Power BI, Dax, Power Automate
execute:
  keep-md: true
  warning: false
format:
  html: 
    fig-path: images
    code-fold: true
    code-line-numbers: true
    fig-width: 10.5
    fig-height: 7.5
---






## Ticket Dashboard
The Ticket Dashboard provides a centralized view of all support tickets, allowing teams to monitor, track, and manage requests efficiently. It displays key metrics such as ticket status, Request type, and response times.

![](../data_visualization/images/dashboard.png)


## Informer Dashboard
The Informer Dashboard provides an interactive overview of curriculum updates and changes across academic years. It allows educators and administrators to track modifications in changes year and year. By providing a clear view of curriculum progression, it supports data-driven decisions, ensures alignment with standards, and helps stakeholders plan effectively for upcoming academic years.

::: {.cell-output-display}
![](../data_visualization/images/dashbaord2.jpg){width=1008}
:::


## DAX 
In report, I used DAX to analyze case holds over time. I calculated monthly counts of cases on hold, allowing for easy monitoring of trends and workload fluctuations. 
Additionally, I implemented three-year flags to identify cases that have not been on scheduled across multiple years, highlighting long-standing or recurring issues. 

::: {.cell-output-display}
![](../data_visualization/images/dax1.jpg){width=1008}
![](../data_visualization/images/dax2.png){width=1008}
:::

## Power Automate
I leveraged Power Automate to streamline the processing of the the Report. By automating data transformation, I was able to reduces manual effort, ensures consistency across reports, and allows for timely updates. 

::: {.cell-output-display}
![](../data_visualization/images/powerautomate.jpg){height=380}
:::
