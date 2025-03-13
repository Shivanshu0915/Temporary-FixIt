import { useState, useRef, useEffect } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Smile, Image, PlayCircle, XCircle } from "lucide-react";
import axios from "axios";
import { getAccessToken } from "../../components/Authentication/RefreshToken";

export const FileComplaint = () => {
    const [title, setTitle] = useState(""); 
    const [category, setCategory] = useState("hostel"); 
    const [subCategory, setSubCategory] = useState(""); 
    const [text, setText] = useState(""); 
    const [selectedFiles, setSelectedFiles] = useState([]);

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const textAreaRef = useRef(null);
    const [emojiPerRow, setEmojiPerRow] = useState(5);

    // State to track upload progress
    const [uploading, setUploading] = useState(false);

    const hostelOpt= ["Electricity", "Internet", "Carpenter", "Cleanliness", "Plumber"]
    const messOpt= ["Food", "Mess fees"]
    
    const addEmoji = (emoji) => {
        const newText = text + emoji.native;
        setText(newText);
        setShowEmojiPicker(false);
        // Move cursor to the end after closing emoji picker
        setTimeout(() => {
            if (textAreaRef.current) {
                textAreaRef.current.focus();  // Focus the textarea
                textAreaRef.current.setSelectionRange(newText.length, newText.length);  // Move cursor to end
            }
        }, 0); 
    };

    useEffect(() => {
        const updateEmojiPerRow = () => {
            if (window.innerWidth >= 768) {
                setEmojiPerRow(8); // Large screen
            } else {
                setEmojiPerRow(5); // Small screen
            }
        };

        updateEmojiPerRow(); // Set initial value
        window.addEventListener("resize", updateEmojiPerRow); // Listen to window resize

        return () => window.removeEventListener("resize", updateEmojiPerRow);
    }, []);

    // Handle file selection and store filenames
    const handleFileChange = (event) => {
        const files = Array.from(event.target.files)
        setSelectedFiles((prev) => [...prev, ...files]); // Append new files to the state
    };

    // Remove a selected file from the list
    const removeFile = (fileName) => {
        setSelectedFiles((prev) => prev.filter(file => file !== fileName));
    };


    // Submit complaint and upload files as well
    const handleSubmit = async () => {
        if (!title || !text || !category || !subCategory) {
            alert("Please fill in all fields!");
            return;
        }
    
        setUploading(true);
        console.log(selectedFiles);

        // Upload selected files to the backend (which uploads them to Cloudinary)
        let uploadedMedia = [];
        if (selectedFiles.length > 0) {
            const formData = new FormData();
            selectedFiles.forEach((file) => formData.append("files", file));
            console.log("formData bhi bn gya");
            console.log()
            try {
                const uploadResponse = await fetch("http://localhost:3000/user/upload-complaint", {
                    method: "POST",
                    body: formData,
                });

                console.log("uploadResponse", uploadResponse);
                if (!uploadResponse.ok) throw new Error("Throw error Failed to upload files");
    
                uploadedMedia = await uploadResponse.json(); // Cloudinary URLs
            } catch (error) {
                console.error("File Upload Error:", error);
                alert("File upload failed!");
                setUploading(false);
                return;
            }
        }
        
        console.log("axios upload done");
        // Retrieve Access Token from sessionStorage
        let accessToken = sessionStorage.getItem("accessToken");
        if (!accessToken) {
            const result = await getAccessToken();
            if (!result.token) {
                alert("Session expired! Login again to continue");
                return;
            } else {
                accessToken = result.token
            }
        }
    
        // 3️⃣ Prepare complaint data
        const complaintData = {
            category,
            subCategory,
            title,
            content: {
                text,
                media: uploadedMedia, // Cloudinary URLs
            },
        };
    
        // 4️⃣ Send complaint data to backend with Authorization Header
        try {
            const response = await fetch("http://localhost:3000/user/create-complaint", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${accessToken}`,  // Send token
                },
                body: JSON.stringify(complaintData),
            });

            if (response.ok) {
                alert("Complaint filed successfully!");
                setTitle("");
                setText("");
                setCategory("");
                setSubCategory("");
                setSelectedFiles([]);
            } else {
                alert("Failed to submit complaint");
            }
        } catch (error) {
            console.error("Error submitting complaint:", error);
        } finally {
            setUploading(false);
        }
    };
    
    
    return (
        <div className="bg-stubgdark w-full h-full p-4 flex flex-col gap-y-5 overflow-auto scrollbar-thin scrollbar-webkit">
            <div className="bg-stubgdark text-white flex justify-center text-xl md:text-3xl font-bold">
                File a Complaint
            </div>

            <div className="bg-stubgdark flex w-full items-center justify-center py-3 px-[5%] lg:px-[20%]">
                <div className="bg-stubgcard min-h-80 h-full w-full py-8 px-6 flex flex-col gap-y-3 rounded-lg relative">
                    {/* Category  */}
                    <div className="mb-2">
                        <select name="hostel" id="hostel" className="w-full p-3 text-gray-400 border border-gray-500 rounded-md cursor-pointer"
                         required value={category} onChange={(e) => setCategory(e.target.value)}>
                            <option value="" className="bg-stubgcard text-gray-300">Choose Category</option>
                            <option key="hostel" value="hostel" className="bg-stubgcard text-gray-300">Hostel</option>
                            <option key="mess" value="mess" className="bg-stubgcard text-gray-300">Mess</option>
                        </select>
                    </div>

                    {/* Subcategory  */}
                    <div className="mb-2">
                    <select name="subCategory" id="subCategory" className="w-full p-3 text-gray-400 border border-gray-500 rounded-md cursor-pointer"
                     required value={subCategory} onChange={(e) => setSubCategory(e.target.value)}>
                        <option value="" className="bg-stubgcard text-gray-300">Select sub category</option>
                        {(category === "hostel" ? hostelOpt : messOpt).map(opt => (
                            <option key={opt} value={opt} className="bg-stubgcard text-gray-300">{opt}</option>
                        ))}
                    </select>
                    </div>

                    {/* Content  */}
                    <input type="text" name="title" id="title" placeholder="Enter title" className="text-gray-300 w-full p-3 border border-gray-500 rounded-md"
                     required value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <textarea value={text} ref={textAreaRef} className="w-full min-h-32 h-40 p-2 border border-gray-500 rounded text-gray-300" placeholder="Describe your issue..." required
                      onChange={(e) => setText(e.target.value)}/>
                    
                    <div className="flex flex-col md:flex md:flex-row md:justify-between gap-5 mt-8 mb-3">
                        <div className="flex justify-start gap-2 items-center relative">
                            {/* Emoji Button with Tooltip */}
                            <div className="relative group">
                                <button className="text-gray-500 hover:text-black p-1 rounded-sm border-2 border-gray-500 bg-stubgcard hover:bg-gray-500 cursor-pointer"
                                onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
                                    <Smile className="w-7 h-7" />
                                </button>
                                <div className="min-w-[70px] absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-200 text-black text-xs px-1.5 py-1 rounded text-center whitespace-nowrap">
                                    Add emoji
                                </div>
                            </div>

                            {/* Emoji Picker (Fixed Position) */}
                            {showEmojiPicker && (
                                <div className="absolute bottom-12 left-0 z-50 bg-black shadow-lg rounded-lg overflow-hidden w-[208px] md:w-[315px] h-[280px]">
                                    <Picker 
                                        data={data} // Pass emoji data
                                        onEmojiSelect={addEmoji} 
                                        theme="dark" // Optional: Set to "auto" or "light"
                                        emoji="point_up"
                                        previewPosition="none" // Hide preview section
                                        perLine={emojiPerRow} // Number of emojis per row
                                        maxFrequentRows={2} // Frequent emojis section size
                                    />
                                </div>
                            )}

                            {/* Image Upload with Tooltip */}
                            <div className="relative group p-1 rounded-sm text-gray-500 hover:text-black bg-stubgcard border-2 border-gray-500 hover:bg-gray-500 cursor-pointer">
                                <label className="cursor-pointer">
                                    <input type="file" accept="image/*" className="hidden" multiple onChange={handleFileChange} />
                                    <Image className="w-7 h-7" />
                                </label>
                                <div className="min-w-[70px] absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-200 text-black text-xs px-1.5 py-1 rounded text-center whitespace-nowrap">
                                    Upload image
                                </div>
                            </div>

                            {/* Video Upload with Tooltip */}
                            <div className="relative group p-1 rounded-sm text-gray-500 hover:text-black bg-stubgcard border-2 border-gray-500 hover:bg-gray-500 cursor-pointer">
                                <label className="cursor-pointer">
                                    <input type="file" accept="video/*" className="hidden" multiple onChange={handleFileChange} />
                                    <PlayCircle className="w-7 h-7" />
                                </label>
                                <div className="min-w-[70px] absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-200 text-black text-xs px-1.5 py-1 rounded text-center whitespace-nowrap">
                                    Upload video
                                </div>
                            </div>
                        </div>

                        <button className="bg-btnblue text-white text-lg font-semibold px-4 py-1 rounded cursor-pointer"
                         onClick={handleSubmit}>
                            {uploading ? "Uploading..." : "Submit"}
                        </button>
                    </div>
                    {/* Display Selected Media Files */}
                    {selectedFiles.length > 0 && (
                        <div className="mt-4 p-3 bg-stubgdark text-gray-300 rounded-md">
                            <h3 className="font-semibold mb-2">Selected Files:</h3>
                            <ul className="list-disc list-inside text-sm">
                                {selectedFiles.map((file, index) => (
                                    <li key={index} className="flex justify-between items-center">
                                        {file.name} {/* Display the file name instead of the whole File object */}
                                        <button className="text-red-500 hover:text-red-700 ml-2" onClick={() => removeFile(file)}>
                                            <XCircle className="w-5 h-5" />
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};