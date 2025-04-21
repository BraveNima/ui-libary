# UI Library

A modern UI component library built with React, Vite, and TypeScript.

## Features

- 🎨 Customizable components with variant and size props
- 📚 Storybook for component documentation and testing
- ✅ Vitest for unit testing
- 📦 Vite for bundling

## Installation

\`\`\`bash
npm install ui-library
\`\`\`

## Usage

\`\`\`jsx
import { Button } from 'ui-library';
import 'ui-library/dist/index.css';

function App() {
  return (
    <div>
      <Button variant="primary" size="medium">
        Click me
      </Button>
    </div>
  );
}
\`\`\`

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | The visual style of the button |
| size | 'small' \| 'medium' \| 'large' | 'medium' | The size of the button |
| children | ReactNode | - | Button contents |
| onClick | function | - | Optional click handler |
| className | string | - | Optional class name for additional styling |

Plus all standard button HTML attributes.

## Development

### Setup

\`\`\`bash
npm install
\`\`\`

### Running Storybook

\`\`\`bash
npm run storybook
\`\`\`

### Building the library

\`\`\`bash
npm run build
\`\`\`

### Running tests

\`\`\`bash
npm test
