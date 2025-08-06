import { useState } from "react";
import { Calculator, Play, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ComputationFormProps {
  onCompute: (data: ComputationData) => void;
  isLoading?: boolean;
}

export interface ComputationData {
  expression: string;
  operation: string;
  variables: Record<string, number>;
}

const operations = [
  {
    value: "evaluate",
    label: "Evaluate",
    description: "Calculate numerical result",
  },
  { value: "simplify", label: "Simplify", description: "Simplify expression" },
  { value: "factor", label: "Factor", description: "Factor the expression" },
  { value: "expand", label: "Expand", description: "Expand the expression" },
  {
    value: "differentiate",
    label: "Differentiate",
    description: "Find derivative",
  },
  { value: "integrate", label: "Integrate", description: "Find integral" },
];

export function ComputationForm({
  onCompute,
  isLoading = false,
}: ComputationFormProps) {
  const [expression, setExpression] = useState("");
  const [operation, setOperation] = useState("simplify");
  const [variableInput, setVariableInput] = useState("");

  const parseVariables = (input: string): Record<string, number> => {
    const variables: Record<string, number> = {};

    if (!input.trim()) return variables;

    const assignments = input.split(",").map((s) => s.trim());

    for (const assignment of assignments) {
      const match = assignment.match(/^([a-zA-Z]\w*)\s*=\s*(-?\d*\.?\d+)$/);
      if (match) {
        const [, variable, value] = match;
        variables[variable] = parseFloat(value);
      }
    }

    return variables;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const variables = parseVariables(variableInput);

    onCompute({
      expression,
      operation,
      variables,
    });
  };

  const selectedOperation = operations.find((op) => op.value === operation);

  return (
    <section className="py-16 px-4" data-scroll-target="computation-form">
      <div className="container mx-auto max-w-4xl">
        <div className="glass rounded-2xl p-8 shadow-medium">
          <div className="flex items-center space-x-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-primary to-purple-600 rounded-xl">
              <Calculator className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Mathematical Computation</h2>
              <p className="text-muted-foreground">
                Enter your expression and select an operation
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Expression Input */}
            <div className="space-y-2">
              <Label htmlFor="expression" className="text-sm font-medium">
                Mathematical Expression
              </Label>
              <Input
                id="expression"
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                placeholder="e.g., x**2 + 2*x + 1, sin(x) + cos(y), 2*a + 3*b"
                className="math-expression text-base h-12"
                required
              />
              <p className="text-xs text-muted-foreground">
                Use Python mathematical notation: +, -, *, /, ** (power), sin(),
                cos(), log(), etc.
              </p>
            </div>

            {/* Operation Selection */}
            <div className="space-y-2">
              <Label htmlFor="operation" className="text-sm font-medium">
                Operation
              </Label>
              <Select value={operation} onValueChange={setOperation}>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Select operation" />
                </SelectTrigger>
                <SelectContent>
                  {operations.map((op) => (
                    <SelectItem key={op.value} value={op.value}>
                      <div className="flex flex-col">
                        <span className="font-medium">{op.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {op.description}
                        </span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {selectedOperation && (
                <p className="text-xs text-muted-foreground">
                  {selectedOperation.description}
                </p>
              )}
            </div>

            {/* Variables Input */}
            <div className="space-y-2">
              <Label htmlFor="variables" className="text-sm font-medium">
                Variable Values
              </Label>
              <Input
                id="variables"
                value={variableInput}
                onChange={(e) => setVariableInput(e.target.value)}
                placeholder="e.g., x = 2, y = 3.5, a = -1"
                className="h-12"
              />
              <p className="text-xs text-muted-foreground">
                Comma-separated assignments. Leave empty for symbolic
                computation.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white font-semibold text-base"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Computing...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Compute
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
