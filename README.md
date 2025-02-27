# Dashboard with Dune Data

This project displays data fetched from Dune Analytics, including Builder Plus Total Revenue and Talent Vault Stakers.

## Overview

A web application that shows:
- Builder Plus Total Revenue in ETH
- A table of Talent Vault Stakers with details such as staker address, total staked $TALENT, builder score, latest staking time, and a link to the talent profile.

## Implementation Steps

1. Set up a Vercel project with a private GitHub repository
2. Created a serverless API endpoint that securely uses your API key
3. Fetched data from Dune Analytics using two queries
4. Displayed the data in a user-friendly format on the web page

## Features

- Displays Builder Plus Total Revenue with proper decimal formatting
- Shows a table of Talent Vault Stakers with sortable data
- Securely handles API keys through environment variables

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Vercel Serverless Functions
- API: Dune Analytics
- Deployment: Vercel

## Environment Variables

Required environment variable in Vercel:
- `dune_test_talent_api`: Your Dune Analytics API key

## Project Structure

dashboard_with_dune/
├── api/
│   └── dune-data.js
├── index.html
├── styles.css
└── README.md

## Live Demo

[Dashboard with Dune Data](https://dashboard-with-dune.vercel.app/) 