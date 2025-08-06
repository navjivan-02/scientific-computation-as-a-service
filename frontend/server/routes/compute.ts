import { RequestHandler } from "express";

export const handleCompute: RequestHandler = async (req, res) => {
  try {
    const { expression, operation, variables } = req.body;

    // Validate required fields
    if (!expression || !operation) {
      return res.status(400).json({
        error: "Missing required fields: expression and operation are required"
      });
    }

    // Make request to your backend API
    const response = await fetch('https://scaas-app-650355947331.asia-south1.run.app/compute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        expression,
        operation,
        variables: variables || {},
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({
        error: `Backend API error: ${response.status} ${response.statusText}`,
        details: errorText
      });
    }

    const result = await response.json();
    
    // Return the result from your backend
    res.json(result);
  } catch (error) {
    console.error('Compute proxy error:', error);
    res.status(500).json({
      error: "Internal server error while processing computation",
      details: error instanceof Error ? error.message : "Unknown error"
    });
  }
};
