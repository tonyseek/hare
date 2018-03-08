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

### Installation

```
brew bundle # if you are using macOS and Homebrew
npm install
cp .env.example .env
```

### Running

```
forego start
```

There are two servers in the development environment:

- `http://127.0.0.1:5000` is the original server with server-side rendering
- `http://127.0.0.1:5300` is a browser-sync proxy for refreshing your browsers

## Deployment

Using `npm pack` to compile and archive a release package (e.g.
`hare-1.0.0.tar.gz`).

```
forego run npm pack
```
