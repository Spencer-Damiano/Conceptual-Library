# Implementing a New API Feature

This document explains the general process of adding a new API feature to your project. It covers creating the backend endpoint, configuring Nginx to route requests, and updating the frontend to call the new API.

## Nginx Configuration

To route requests for the new API feature, add a new location block to your Nginx configuration.

### Example Nginx Configuration Snippet

Note: Replace `/api/feature/example` with the actual endpoint path and `conceptual_library_backend` with the name of the backend service. You can also just add a location to the frontend service if the API is part of the frontend.

```nginx
location /api/feature/example {
    proxy_pass http://conceptual_library_backend:80/api/feature/example;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```

## Backend Setup

Create a new controller for your API feature in the backend. This controller will handle the API requests and send appropriate responses.

### FeatureController.cs

```csharp
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FeatureController : ControllerBase
    {
        [HttpGet("example")]
        public IActionResult GetExample()
        {
            return Ok("Feature Example Response");
        }
    }
}
```

Add this file to the `Controllers` directory in your backend project.

## Frontend Setup

In the frontend, add code to make an API call to the new endpoint. This example uses the `fetch` function to call the API and log the response to the console.

### App.tsx

```tsx
import React, { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    const fetchFeatureExample = async () => {
      try {
        const response = await fetch('/api/feature/example');
        const data = await response.text();
        console.log(data);  // Logs "Feature Example Response" if successful
      } catch (error) {
        console.error('Error fetching feature example:', error);
      }
    };

    fetchFeatureExample();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
      </header>
    </div>
  );
};

export default App;
```

## Testing

1. **Rebuild and Restart Nginx Container**:

    ```bash
    docker-compose build nginx
    docker-compose up -d nginx
    ```

2. **Test the API Endpoint**:

    ```bash
    curl -k https://localhost/api/feature/example
    ```

3. **Verify Output in Frontend**:

    Open the browser console on the frontend page and check the logs for "Feature Example Response" message.

## Conclusion

This document provides a general overview of how to add a new API feature to your project. By following these steps, you can create new endpoints in the backend, configure Nginx to route requests, and update the frontend to call the new API.
