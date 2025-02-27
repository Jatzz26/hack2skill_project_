import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  if (loggedIn) {
    return role === "student" ? <StudentDashboard onClose={() => setLoggedIn(false)} /> : <TeacherDashboard onClose={() => setLoggedIn(false)} />;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-6">
      <Card className="w-full max-w-md p-6 shadow-xl bg-white rounded-lg">
        <CardHeader>
          <CardTitle className="text-center text-xl font-bold">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <label className="block text-sm font-medium">Role</label>
            <select
              className="w-full p-2 border rounded mt-1"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Email</label>
            <Input
              type="email"
              className="w-full p-2 border rounded mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium">Password</label>
            <Input
              type="password"
              className="w-full p-2 border rounded mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700" onClick={handleLogin}>Login</Button>
        </CardContent>
      </Card>
    </div>
  );
}

function StudentDashboard({ onClose }) {
  const features = [
    { title: "Take Quiz", action: () => {} },
    { title: "View Quiz Result", action: () => {} },
    { title: "Submit Assignment", action: () => {} },
    { title: "View Progress", action: () => {} },
    { title: "Ask Doubt", action: () => {} },
    { title: "Feedback", action: () => {} },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-200 p-6 relative">
      <Button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2" onClick={onClose}><X /></Button>
      <h1 className="text-3xl font-bold mb-6 text-green-800">Student Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="w-48 p-6 shadow-lg text-center cursor-pointer bg-white rounded-lg hover:bg-green-300" onClick={feature.action}>
            <CardContent>
              <h2 className="text-lg font-semibold text-green-900">{feature.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function TeacherDashboard({ onClose }) {
  const [clickedIndex, setClickedIndex] = useState(null);
  const features = [
    { title: "Upload Quiz" },
    { title: "Check Students' Results" },
    { title: "Check Assignments" },
    { title: "Reply to Doubts" },
    { title: "Give Feedback" },
    { title: "Upload Notes" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 relative">
      <Button className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2" onClick={onClose}><X /></Button>
      <h1 className="text-3xl font-bold mb-6 text-black">Teacher Dashboard</h1>
      <div className="grid grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className={`w-48 p-6 shadow-lg text-center cursor-pointer rounded-lg transition-colors ${clickedIndex === index ? 'bg-[#2DAA9E]' : 'bg-white hover:bg-gray-200'}`} 
            onClick={() => setClickedIndex(index)}
          >
            <CardContent>
              <h2 className="text-lg font-semibold text-gray-900">{feature.title}</h2>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
