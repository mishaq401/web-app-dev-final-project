import { useState } from 'react';
import ReactQuill from 'react-quill';
import { useContext } from "react";
import { userContext } from "../../CONTEXTS/UserContext";
import 'react-quill/dist/quill.snow.css';
import api from '../../BACKEND/server';

const ArticleEditor = () => {

    document.title = "DailyPost | Editor"

    const [title, setTitle] = useState("")
    const [ArticleText, setArticleText] = useState("")
    const [description, setDescription] = useState("");
    const [CoverImage, setCoverImage] = useState();
    const [thumbnail, setThumbnail] = useState()

    const { user } = useContext(userContext);

    const PublishArticle = async (e) => {

        e.preventDefault();

        const ArticleFormData = new FormData();
        try {


            ArticleFormData.append("title", title)
            ArticleFormData.append("description", description)
            ArticleFormData.append("content", ArticleText)
            ArticleFormData.append("publisher", user.id)
            ArticleFormData.append("thumbnail", thumbnail);
            ArticleFormData.append("coverimage", CoverImage);

            const ArticleUploadRes = await api.post("/article/publish-article", ArticleFormData);

            console.log(ArticleUploadRes);
        }

        catch (error) {

            if (error) {

                console.log(error)

                alert("Internal Server Error! Please Try Again Later.");
            }
        }


    }

    return (<>

        <h1 className="m-auto section-heading mb-5 mt-4 pb-1">PUBLISH AN ARTICLE</h1>

        <form onSubmit={PublishArticle} className="editor-container container my-5 p-0 d-flex flex-column align-items-center">

            <input className='title-input fs-4 fw-bol px-3 py-3 shadow' type="text" onChange={e => setTitle(e.target.value)} placeholder='Enter Article Title' />

            <textarea className='px-3 py-2 shadow' cols="44" rows="4" maxLength={200} value={description} onChange={e => setDescription(e.target.value)} placeholder="Enter Description For Your Article. Max 200 Characters..!" />

            <div className="text-editor-container w-100 shadow">
                <ReactQuill theme="snow" value={ArticleText} onChange={setArticleText} placeholder="Start Writing Your Article From Here.....! " />
            </div>


            <div className="editor-bottom d-flex justify-content-evenly align-items-center flex-wrap  gap-5">


                <div className="editor-bottom-content py-4 shadow d-flex flex-wrap px-5 gap-4">

                    {/* 
                    
                    <span className='editor-right-heading fs- fw-bold pb-'>Change Visibility:</span>
                    
                    <select className='fs- text-cente pb-1' name="visibility">
                        <option value="public"> Public</option>
                        <option value="private"> Private</option>
                    </select> 
                    
                    */}

                    <span className='editor-right-heading fs-5 fw-bold pb-'>Add Thumbnail:</span>
                    <input type="file" onChange={e => setThumbnail(e.target.files[0])} accept="image/*" />

                    {/*
                     <label htmlFor="thumbnail">Click To Upload Thumbnail</label>
                    */}

                    <span className='editor-right-heading fs-5 fw-bold pb-'>Add Cover Image:</span>
                    <input type="file" onChange={e => setCoverImage(e.target.files[0])} accept="image/*" />

                </div>

                {/*
                
                <div className="editor-bottom-content shadow d-flex flex-column align-items-start py-4 px-5 gap-3">

                    <span className='editor-right-heading fs-5 fw-bold pb- mb-2'>Add Category</span>

                    <div className='d-flex justify-content-center align-items-center flex-wrap gap-5'>

                        <div>
                            <input className='me-2' type="radio" name="category" value="science" required />
                            <span className='fw-bol'>Science</span>
                        </div>

                        <div>
                            <input className='me-2' type="radio" name="category" value="Technology" required />
                            <span className='fw-bol'>Technology</span>
                        </div>

                        <div>
                            <input className='me-2' type="radio" name="category" value="art" required />
                            <span className='fw-bol'>Art</span>
                        </div>

                        <div>
                            <input className='me-2' type="radio" name="category" value="cars" required />
                            <span className='fw-bol'>Cars</span>
                        </div>

                        <div>
                            <input className='me-2' type="radio" name="category" value="gaming" required />
                            <span className='fw-bol'>Gaming</span>
                        </div>

                        <div>
                            <input className='me-2' type="radio" name="category" value="education" required />
                            <span className='fw-bol'>Education</span> 
                        </div>

                        <div>
                            <input className='me-2' type="radio" name="category" value="environment" required />
                            <span className='fw-bol'>Environment</span>
                        </div>

                    </div>

                </div>
                */}

            </div>

            <button className='article-publish-btn btn btn-primary rounded-pill fs-5 pb-2' type="submit">Publish</button>

        </form>

        <div>{ArticleText}</div>

    </>);

}

export default ArticleEditor;


/*<div className="editor-bottom d-flex justify-content-evenly align-items-center flex-wrap mt-5 gap-5">

<div className="editor-right-content py-4 shadow-lg d-flex flex-column px-5 gap-4">
     
    <span className='editor-right-heading fs- fw-bold pb-'>Change Visibility:</span>
    <select className='fs- text-cente pb-1' name="visibility">
        <option value="public"> Public</option>
        <option value="private"> Private</option>
    </select> 

    <span className='editor-right-heading fs- fw-bold pb-'>Add Thumbnail:</span>
    <input type="file" name="" id="thumbnail" />
    <label htmlFor="thumbnail">Click To Upload Thumbnail</label> 

    <span className='editor-right-heading fs- fw-bold pb-'>Add Cover Image:</span>
    <input type="file" name="" id="artimage" />

</div>


<div className="editor-right-content shadow-lg d-flex flex-column align-items-start py-4 px-5 gap-3">

    <span className='editor-right-heading fs- fw-bold pb-'>Add Category</span>

    <div>
        <input className='me-2' type="radio" name="category" value="science" required />
        <span className='fw-bol'>Science</span>
    </div>

    <div>
         <input className='me-2' type="radio" name="category" value="Technology" required />
        <span className='fw-bol'>Technology</span>
    </div>

    <div>
        <input className='me-2' type="radio" name="category" value="art" required />
        <span className='fw-bol'>Art</span>
    </div>

    <div>
        <input className='me-2' type="radio" name="category" value="cars" required />
        <span className='fw-bol'>Cars</span>
    </div>

    <div>
        <input className='me-2' type="radio" name="category" value="gaming" required />
        <span className='fw-bol'>Gaming</span>
    </div>

    <div>
        <input className='me-2' type="radio" name="category" value="education" required />
        <span className='fw-bol'>Education</span>
    </div>

    <div>
        <input className='me-2' type="radio" name="category" value="environment" required />
        <span className='fw-bol'>Environment</span>
    </div>

</div>

</div>
*/