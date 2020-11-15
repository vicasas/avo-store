# Titulo

## MacOS

### Node Inspect

```javascript
"scripts": {
    ...
    "dev:inspect": "NODE_INSPECT='--inspect' run dev",
    ...
},
```

### Path Alias

```javascript
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["components/*"]
    }
    ...
  },
}
```

## Windows

### Node Inspect

```javascript
"scripts": {
    ...
    "dev:inspect": "npm --node-options=--inspect=0.0.0.0:9229 run dev",
    ...
},
```

### Path Alias

```javascript
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@components/*": ["components/*"]
    }
    ...
  },
}
```
