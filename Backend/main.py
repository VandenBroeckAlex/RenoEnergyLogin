from fastapi import FastAPI, Form, Request
from fastapi.responses import HTMLResponse, JSONResponse

app = FastAPI()

@app.post("/submitMerchant")
async def submit_form(
    FirstName: str = Form(...),
    Location: str = Form(...),
    CompanyName: str = Form(...),
    Email: str = Form(...),
    Industry: str = Form(...),
    Phone: str = Form(...),
    Password: str = Form(...),
    Privacy: str = Form(...)
):
   
    return JSONResponse({
        "message": "Form submitted successfully",
        "data": {
            "FirstName": FirstName,
            "Location": Location,
            "CompanyName": CompanyName,
            "Email": Email,
            "Industry": Industry,
            "Phone": Phone,
            "Password": "This is a secret"
        }
    })

@app.post("/submitAgent")
async def submit_form(
    FirstName: str = Form(...),
    LastName: str = Form(...),
    Email: str = Form(...),
    Industry: str = Form(...),
    Phone: str = Form(...),
    Password: str = Form(...),
    Privacy: str = Form(...)
):
   
    return JSONResponse({
        "message": "Form submitted successfully",
        "data": {
            "FirstName": FirstName,
            "Email": Email,
            "Industry": Industry,
            "Phone": Phone,
            "Password": "This is a secret"
        }
    })
