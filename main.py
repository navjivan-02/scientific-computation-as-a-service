from fastapi import FastAPI
from pydantic import BaseModel
from sympy import sympify, Symbol, simplify, factor, expand
from typing import Optional, Dict
from fastapi.middleware.cors import CORSMiddleware
import traceback
from fastapi import Request

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # for local dev
        "https://project-scaas.vercel.app",  # ✅ permanent frontend URL
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "Welcome to Scientific Computation as a Service"}

# === Request Model ===
class ExpressionRequest(BaseModel):
    expression: str
    operation: Optional[str] = "evaluate"
    variables: Optional[Dict[str, float]] = None

# === Compute Endpoint with /api prefix ===
@app.post("/api/compute")
async def compute_expression(data: ExpressionRequest, request: Request):
    origin = request.headers.get("origin")
    referer = request.headers.get("referer")
    print(f"🔍 Request received from Origin: {origin} | Referer: {referer}")

    try:
        expr = sympify(data.expression)
        op = data.operation.lower()
        result_expr = expr
        result = None

        if op == "evaluate":
            if data.variables:
                result_expr = result_expr.subs(data.variables)
            result = result_expr.evalf()

        elif op == "simplify":
            result_expr = simplify(expr)
            result = result_expr.subs(data.variables).evalf() if data.variables else result_expr.evalf()

        elif op == "factor":
            result_expr = factor(expr)
            result = result_expr.subs(data.variables).evalf() if data.variables else result_expr.evalf()

        elif op == "expand":
            result_expr = expand(expr)
            result = result_expr.subs(data.variables).evalf() if data.variables else result_expr.evalf()

        elif op == "differentiate":
            diff_var = list(data.variables.keys())[0] if data.variables else 'x'
            diff_symbol = Symbol(diff_var)
            result_expr = expr.diff(diff_symbol)
            result = result_expr.subs(data.variables).evalf() if data.variables else result_expr.evalf()

        elif op == "integrate":
            int_var = list(data.variables.keys())[0] if data.variables else 'x'
            int_symbol = Symbol(int_var)
            result_expr = expr.integrate(int_symbol)
            result = result_expr.subs(data.variables).evalf() if data.variables else result_expr.evalf()

        else:
            return {"error": f"Unsupported operation: {op}"}

        return {
            "input": data.expression,
            "operation": op,
            "variables": data.variables,
            "symbolic_result": str(result_expr),
            "numeric_result": str(result)
        }

    except Exception as e:
        return {
            "error": str(e),
            "trace": traceback.format_exc()
        }
