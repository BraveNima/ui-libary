# UI Library Monorepo

A modern UI component library built with React, Vite, TypeScript, and Tailwind CSS.

## Project Structure

This is a monorepo containing:

- `packages/ui-library`: The UI component library with Tailwind CSS
- `apps/demo`: A demo application showcasing the UI components

## Getting Started

### Prerequisites

- Node.js 16 or later
- pnpm 7 or later

### Installation

1. Clone the repository
2. Install dependencies:

\`\`\`bash
pnpm install
\`\`\`

3. Build the UI library:

\`\`\`bash
pnpm build --filter=ui-library
\`\`\`

4. Start the demo app:

\`\`\`bash
pnpm dev --filter=demo
\`\`\`

## Development

To develop all apps and packages simultaneously:

\`\`\`bash
pnpm dev
\`\`\`

### Building

To build all apps and packages:

\`\`\`bash
pnpm build
\`\`\`

### Testing

To run tests:

\`\`\`bash
pnpm test
\`\`\`

### Storybook

To run Storybook for the UI library:

\`\`\`bash
pnpm storybook
\`\`\`

## Troubleshooting

If you encounter any installation or setup issues, please refer to the [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) guide.

## Components

### Button

A versatile button component with multiple variants and sizes, styled with Tailwind CSS.

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'primary' \| 'secondary' \| 'outline' \| 'ghost' | 'primary' | The visual style of the button |
| size | 'small' \| 'medium' \| 'large' | 'medium' | The size of the button |
| children | ReactNode | - | Button contents |
| onClick | function | - | Optional click handler |
| className | string | - | Optional class name for additional styling |

Plus all standard button HTML attributes.
