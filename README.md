# Hare

Yet another front-end project boilerplate.

## Introduction

This project uses React.js stack and its server-side rendering. The file layout
is:

- `public` - The universal code in both browser-side and server-side
- `server` - The server-side code (HTTP server)
- `static` - The browser-side code (stylesheets and media files)
- `dist` `views` - The generated files

The Redux components (reducers, actions and also) are all in the `public`.

## Development

To prepare your environment:

```
brew bundle # if you are using macOS and Homebrew
npm install
cp .env.example .env
```

To start the development server:

```
forego start
```

Now, open http://127.0.0.1:5300 and view it.
