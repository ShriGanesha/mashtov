# MASTOV

AI-powered medical SOAP note generation from audio recordings. Transform patient encounter audio into intelligent clinical notes using agentic AI.

## Features

- 🎙️ **Audio Transcription** - Convert patient encounter recordings to text using OpenAI Whisper
- 📝 **SOAP Note Generation** - Generate structured clinical notes using AI
- 🤖 **Agentic AI** - Autonomous AI agents that think, analyze, and generate like clinical experts
- 🔒 **HIPAA Compliant** - Enterprise-grade security for patient data
- ⚡ **Real-time Progress** - Live updates via Server-Sent Events (SSE)
- 🎨 **Modern UI** - Built with Next.js, React, Tailwind CSS and Shadcn

## Tech Stack

### Frontend

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library

### Backend

- **FastAPI** - Modern Python web framework
- **PyTorch** - Machine learning framework
- **Transformers** - Hugging Face models
- **OpenAI Whisper** - Speech-to-text model
- **Mistral-7B** - Language model for SOAP generation

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn** or **pnpm**
- **Python 3.10+**
- **pip3**

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/ShriGanesha/mashtov.git
cd mashtov
```

### 2. Backend Setup

#### Create Virtual Environment

```bash
cd backend
python3 -m venv .venv
```

#### Activate Virtual Environment

**macOS/Linux:**

```bash
source .venv/bin/activate
```

**Windows:**

```bash
.venv\Scripts\activate
```

#### Install Dependencies

```bash
pip3 install -r requirements.txt
```

**Note:** The first run will download the required AI models (Whisper and Mistral-7B), which may take some time depending on your internet connection.

### 3. Frontend Setup

```bash
cd ..  # Go back to project root
npm install
```

## Running the Project

You need to run both the backend and frontend servers.

### 1. Start the Backend Server

Open a terminal and run:

```bash
cd backend
source .venv/bin/activate  # Activate virtual environment
python3 -m uvicorn main:app --host 0.0.0.0 --port 8000
```

The backend API will be available at `http://localhost:8000`

**API Documentation:** Visit `http://localhost:8000/docs` for interactive API documentation

### 2. Start the Frontend Development Server

Open a new terminal and run:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

### 3. Build for Production

**Frontend:**

```bash
npm run build
npm start
```

**Backend:**

```bash
cd backend
source .venv/bin/activate
python3 -m uvicorn main:app --host 0.0.0.0 --port 8000
```

## Project Structure

```
mashtov/
├── backend/                    # FastAPI backend
│   ├── main.py                # Application entry point
│   ├── requirements.txt       # Python dependencies
│   ├── configs/               # Configuration files
│   ├── controllers/           # Request handlers
│   ├── routes/                # API routes
│   ├── services/              # Business logic
│   ├── models/                # AI model storage
│   └── utils/                 # Utility functions
├── src/                       # Next.js frontend
│   ├── app/                   # App Router pages
│   │   ├── page.tsx          # Homepage
│   │   └── visit/            # Visit page
│   ├── components/            # React components
│   │   └── ui/               # UI components
│   └── lib/                   # Utilities
├── public/                    # Static assets
├── package.json              # Node.js dependencies
└── README.md                 # This file
```

## Usage

1. Navigate to `http://localhost:3000`
2. Click "Get Started" or "Experience Agentic AI"
3. Upload a patient encounter audio file (MP3, WAV, M4A, etc.)
4. Click "Generate SOAP Note"
5. Watch real-time progress as the AI processes your audio
6. Review and copy the generated SOAP note

## Environment Variables

### Backend

The backend uses default values but can be configured via environment variables:

- `CORS_ORIGINS` - Allowed CORS origins (default: `http://localhost:3000`)
- Model paths are auto-configured in `configs/settings.py`

### Frontend

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## API Endpoints

### System

- `GET /` - Root endpoint
- `GET /health` - Health check
- `GET /system/info` - System information

### Visits

- `POST /visit/create` - Create a new visit with audio
- `GET /progress/{request_id}` - Stream progress updates (SSE)

### SOAP Notes

- `GET /soap/{visit_id}` - Retrieve SOAP note

## Troubleshooting

### Backend Issues

**Models not downloading:**

- Ensure you have a stable internet connection
- Check available disk space (models require ~15GB)

**Port already in use:**

```bash
# Change the port
python3 -m uvicorn main:app --host 0.0.0.0 --port 8001
```

### Frontend Issues

**Port 3000 already in use:**

```bash
# Next.js will prompt you to use a different port
# Or manually specify:
npm run dev -- -p 3001
```

**API connection errors:**

- Ensure the backend is running on port 8000
- Check CORS settings in `backend/configs/settings.py`

## Performance Notes

- First request may be slower as models are loaded into memory
- GPU acceleration is used if available (CUDA/MPS)
- Processing time varies based on audio length and hardware
