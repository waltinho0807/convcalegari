import Footer from '../../components/Footer';
import Javascript from '../../components/Javascript';




import ShowBlog from '../../components/blog/ShowBlog';
import ShowBlogHero from '../../components/blog/ShowBlogHero';


const BlogDetails = ({currentUser})=>{
    return (
        <div> 
            <ShowBlogHero />
            <ShowBlog/>       
            <Footer/>
            <Javascript/>
        </div>
    )
   
}

export default BlogDetails;