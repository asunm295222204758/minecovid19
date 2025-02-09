COVID-19 Prediction System
A machine learning and deep learning-based web application that predicts the likelihood of COVID-19 infection based on user symptoms, CT scans, and X-ray images.

🔹 Features
User Information Collection (Name, Age, Symptoms).
CT Scan/X-ray Upload for Analysis.
Model Training using datasets.
COVID-19 Probability Prediction with a confidence score.
🛠️ Tech Stack
Frontend:
HTML, CSS, JavaScript (UI)
Backend:
Python (Flask API)
Machine Learning: SVM
Deep Learning: TensorFlow (for image processing)
Libraries Used:
NumPy, Pandas, OpenCV, Matplotlib
⚡ Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/asunm295222204758/Covid19.git
cd Covid19
2️⃣ Set Up a Virtual Environment (Optional but Recommended)
bash
Copy
Edit
python -m venv venv
source venv/bin/activate  # On macOS/Linux
venv\Scripts\activate     # On Windows
3️⃣ Install Dependencies
bash
Copy
Edit
pip install -r requirements.txt
4️⃣ Run the Application
bash
Copy
Edit
python app.py
Visit http://127.0.0.1:5000/ in your browser.

📂 Project Structure
csharp
Copy
Edit
📦 Covid19  
 ┣ 📂 static              # CSS, JavaScript, Images  
 ┣ 📂 templates           # HTML Files (UI)  
 ┣ 📂 models              # ML/DL models  
 ┣ 📜 app.py              # Flask Backend  
 ┣ 📜 requirements.txt    # Dependencies  
 ┣ 📜 README.md           # Project Documentation  
🚀 Usage
Enter Symptoms (checkbox selection).
Upload a CT Scan/X-ray image.
Click Predict to get the COVID-19 probability.
The model will analyze and return a percentage risk score.
🤝 Contribution Guidelines
Fork the repository.
Create a new branch:
bash
Copy
Edit
git checkout -b feature-branch
Make changes & commit:
bash
Copy
Edit
git commit -m "Added new feature"
Push the changes:
bash
Copy
Edit
git push origin feature-branch
Create a Pull Request for review.
📌 GitHub Repository
🔗 Covid19 Repository

🔹 Want to contribute? Check out our Contribution Guidelines.

📌 License
This project is open-source under the MIT License.
