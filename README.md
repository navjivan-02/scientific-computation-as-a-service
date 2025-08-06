# Scientific Computation as a Service (SCaaS)

A cloud-native API for symbolic and numerical computation using [SymPy](https://www.sympy.org/). Built with FastAPI, Dockerized, and deployed on Google Cloud Run.

---

## 💡 Features

- ✅ Symbolic and Numeric Evaluation  
- ✅ Variable Substitution  
- ✅ Operations: `simplify`, `factor`, `expand`, `differentiate`, `integrate`, `evaluate`  
- ✅ FastAPI-powered REST API  
- ✅ Dockerized + Deployed on Google Cloud Run  

---

## 🌐 Live Demo

▶️ [scaas-app on Google Cloud Run](https://scaas-app-650355947331.asia-south1.run.app)

---

## 📦 API Usage

### 🔹 Endpoint
```
POST /compute
```

### 🔹 Example Request
```json
{
  "expression": "x**2",
  "operation": "differentiate",
  "variables": {
    "x": 2
  }
}
```

### 🔹 Example Response
```json
{
  "input": "x**2",
  "operation": "differentiate",
  "variables": {
    "x": 2
  },
  "symbolic_result": "2*x",
  "numeric_result": "4.00000000000000"
}
```

---

## 🛠️ Tech Stack

- **FastAPI**  
- **SymPy**  
- **Docker**  
- **Google Cloud Run**

---

## 🧭 Project Structure

```
scaas/
├── main.py             # FastAPI app
├── requirements.txt    # Python dependencies
├── Dockerfile          # Docker config
└── README.md
```

---

## 🧪 Local Development

```bash
git clone https://github.com/navjivan-02/scientific-computation-as-a-service.git
cd scientific-computation-as-a-service
python -m venv venv
venv\Scripts\activate        # On Windows
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 🐳 Docker Build and Run

```bash
docker build -t scaas-app .
docker run -p 8080:8080 scaas-app
```
