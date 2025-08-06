from fastapi import FastAPI
from pydantic import BaseModel
from sympy import sympify, Symbol, simplify, factor, expand
import traceback
from typing import Optional, Dict
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # or ["http://localhost:5173"] for stricter control
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "Welcome to Scientific Computation as a Service"}

class ExpressionRequest(BaseModel):
    expression: str
    operation: Optional[str] = "evaluate"
    variables: Optional[Dict[str, float]] = None

@app.post("/compute")
def compute_expression(data: ExpressionRequest):
    try:
        expr = sympify(data.expression)
        op = data.operation.lower()
        result_expr = expr  # symbolic expression to transform
        result = None       # numeric result to return

        if op == "evaluate":
            if data.variables:
                result_expr = result_expr.subs(data.variables)
            result = result_expr.evalf()

        elif op == "simplify":
            result_expr = simplify(expr)
            if data.variables:
                result = result_expr.subs(data.variables).evalf()
            else:
                result = result_expr.evalf()

        elif op == "factor":
            result_expr = factor(expr)
            if data.variables:
                result = result_expr.subs(data.variables).evalf()
            else:
                result = result_expr.evalf()

        elif op == "expand":
            result_expr = expand(expr)
            if data.variables:
                result = result_expr.subs(data.variables).evalf()
            else:
                result = result_expr.evalf()

        elif op == "differentiate":
            diff_var = list(data.variables.keys())[0] if data.variables else 'x'
            diff_symbol = Symbol(diff_var)
            result_expr = expr.diff(diff_symbol)
            if data.variables:
                result = result_expr.subs(data.variables).evalf()
            else:
                result = result_expr.evalf()

        elif op == "integrate":
            int_var = list(data.variables.keys())[0] if data.variables else 'x'
            int_symbol = Symbol(int_var)
            result_expr = expr.integrate(int_symbol)
            if data.variables:
                result = result_expr.subs(data.variables).evalf()
            else:
                result = result_expr.evalf()

        else:
            return {"error": f"Unsupported operation: {op}"}

        symbolic_result = str(result_expr)

        return {
            "input": data.expression,
            "operation": op,
            "variables": data.variables,
            "symbolic_result": symbolic_result,
            "numeric_result": str(result)
        }

    except Exception as e:
        return {
            "error": str(e),
            "trace": traceback.format_exc()
        }
