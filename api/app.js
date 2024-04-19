import express from "express";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import chatRoute from "./routes/chat.route.js";
import envRoute from "./routes/env.route.js";

const app = express();

// app.use(cors({origin:process.env.CLIENT_URL, credentials: true}));
app.use(cors(
    {
        origin: ["https://mern-client-inky.vercel.app/"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/test", testRoute);
app.use("/api/posts", postRoute);
app.use("/api/messages", messageRoute);
app.use("/api/chats", chatRoute);
app.use("/api/env", envRoute);


app.listen(8800, () => {
    console.log("Server is running on http://localhost:8800");
})