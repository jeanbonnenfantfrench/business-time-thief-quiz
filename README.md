# Business Time Thief Quiz

Interactive quiz to help businesses identify their biggest operational bottleneck and discover automation solutions.

## Live Demo

[Take the Quiz](https://jeanbonnenfantfrench.github.io/business-time-thief-quiz/)

## Features

- 8-question diagnostic quiz
- 6 unique character results based on business pain points
- Direct CTAs to Lleverage solutions
- Mobile responsive design
- Fast loading (pure HTML/CSS/JavaScript)
- Shareable results with URL parameters

## Tech Stack

- Pure HTML/CSS/JavaScript
- No dependencies or build process required
- Hosted on GitHub Pages

## Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/jeanbonnenfantfrench/business-time-thief-quiz.git
   cd business-time-thief-quiz
   ```

2. Open `index.html` in your browser
   - No build process required
   - No server needed (works with `file://` protocol)

3. For local development with a server (optional):
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

## Project Structure

```
business-time-thief-quiz/
├── index.html          # Main HTML structure
├── style.css           # Lleverage brand styling
├── quiz.js             # Quiz logic and scoring
├── images/             # Character images directory
│   ├── repetitus.png
│   ├── manualis.png
│   ├── duplicatus.png
│   ├── confusus.png
│   ├── calculatus.png
│   └── validatus.png
├── README.md           # This file
└── .gitignore          # Git ignore patterns
```

## Time Thief Characters

1. **Repetitus the Messenger** → Customer Support Automation
2. **Manualis the Scribe** → Order Processing + Invoice Automation
3. **Duplicatus the Clerk** → Data Transformation
4. **Confusus the Planner** → Production & Capacity Planning
5. **Calculatus the Merchant** → Quote Generation
6. **Validatus the Auditor** → Invoice Processing

## GitHub Pages Deployment

The quiz is automatically deployed to GitHub Pages when you push to the `main` branch.

### Manual Setup (if needed):

1. Go to repository Settings
2. Navigate to Pages
3. Source: Deploy from branch
4. Branch: `main`
5. Folder: `/` (root)
6. Save

The quiz will be available at:
`https://jeanbonnenfantfrench.github.io/business-time-thief-quiz/`

## Adding Character Images

Place the character images in the `images/` directory:
- `repetitus.png`
- `manualis.png`
- `duplicatus.png`
- `confusus.png`
- `calculatus.png`
- `validatus.png`

Images should be in Asterix-style illustration format, approximately 200x200px for best results.

## About

Created for [Lleverage.ai](https://www.lleverage.ai) to help traditional European businesses identify automation opportunities.

## License

This project is proprietary and created for Lleverage.

