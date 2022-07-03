//Functions to change the blog text shown on the home page

const blog_post_one_preview_text = `A Uniform Resource Locator (URL) is a string used for addresses of
resources on the internet such as documents or images (objects). It acts
the same as an address when trying to find a location. An address for a
house will have info like the house number, the street, and the city for
example......`

const blog_post_two_preview_text = `The authors of this text go into depth about what makes up the
World-Wide Web (W3). We have covered the basics of what a URL is or what
the HTTP is. I will not go into what those do but how those connect
people from opposite sides of the world and encourage collaboration and
learning......`;

const blog_post_three_preview_text = `Metadata when searched shows data used to describe information about
other data. This is vague however a useful definition as there are many
different types of metadata. [1] A basic example of metadata is for a
book......`;

const blog_post_list_text = [blog_post_one_preview_text, blog_post_two_preview_text, blog_post_three_preview_text];

function getRandomBlogPost() {
    var getRandomNumber = Math.floor(Math.random() * 3) ;
    document.getElementById("home-blog-section-content").innerHTML = blog_post_list_text[getRandomNumber]; 
}

//////////////////////////////////////////////////////////////////////

function RunApp() {
    getRandomBlogPost();
}

RunApp();



