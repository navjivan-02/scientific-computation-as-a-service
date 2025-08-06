import { CheckCircle, AlertCircle, Copy, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface ComputationResult {
  input: {
    expression: string;
    operation: string;
    variables: Record<string, number>;
  };
  output: {
    symbolic?: string;
    numerical?: string | number;
    steps?: string[];
    error?: string;
  };
  timestamp: Date;
  executionTime?: number;
}

interface ResultsDisplayProps {
  result: ComputationResult | null;
}

export function ResultsDisplay({ result }: ResultsDisplayProps) {
  if (!result) {
    return (
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="glass">
            <CardContent className="flex flex-col items-center justify-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-center">
                Enter a mathematical expression above and click "Compute" to see
                results here.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  const { input, output, timestamp, executionTime } = result;
  const hasError = output.error;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatVariables = (variables: Record<string, number>) => {
    return Object.entries(variables)
      .map(([key, value]) => `${key} = ${value}`)
      .join(", ");
  };

  return (
    <section className="py-8 px-4" data-scroll-target="results-display">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">Computation Results</h3>
            <div className="flex items-center space-x-2">
              {executionTime && (
                <Badge variant="secondary" className="text-xs">
                  {executionTime}ms
                </Badge>
              )}
              <Badge
                variant={hasError ? "destructive" : "default"}
                className="text-xs"
              >
                {hasError ? "Error" : "Success"}
              </Badge>
            </div>
          </div>

          {/* Input Summary */}
          <Card className="glass">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center space-x-2">
                <span>Input</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <span className="text-sm font-medium text-muted-foreground">
                  Expression:
                </span>
                <div className="math-expression mt-1">{input.expression}</div>
              </div>
              <div className="flex flex-wrap gap-4">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Operation:
                  </span>
                  <Badge variant="outline" className="ml-2 capitalize">
                    {input.operation}
                  </Badge>
                </div>
                {Object.keys(input.variables).length > 0 && (
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">
                      Variables:
                    </span>
                    <span className="ml-2 text-sm font-mono">
                      {formatVariables(input.variables)}
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          {hasError ? (
            <Card className="border-destructive/50">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center space-x-2 text-destructive">
                  <AlertCircle className="h-5 w-5" />
                  <span>Error</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-sm text-destructive font-mono">
                    {output.error}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {/* Symbolic Result */}
              {output.symbolic && (
                <Card className="glass">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>Symbolic Result</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(output.symbolic!)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                      <p className="text-lg font-mono text-primary">
                        {output.symbolic}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Numerical Result */}
              {output.numerical !== undefined && (
                <Card className="glass">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center justify-between">
                      <span>Numerical Result</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyToClipboard(String(output.numerical))
                        }
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-accent/50 border border-accent rounded-lg p-4">
                      <p className="text-2xl font-mono font-semibold">
                        {output.numerical}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Steps */}
              {output.steps && output.steps.length > 0 && (
                <Card className="glass">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Solution Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {output.steps.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-semibold mt-0.5">
                            {index + 1}
                          </div>
                          <div className="flex-1 bg-muted/30 border border-muted rounded-lg p-3">
                            <p className="text-sm font-mono">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          )}

          {/* Metadata */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Computed at: {timestamp.toLocaleString()}</span>
            <Button variant="ghost" size="sm" className="text-xs">
              <Download className="h-3 w-3 mr-1" />
              Export Results
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
