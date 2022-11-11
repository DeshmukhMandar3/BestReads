
function navbar_fn() {

    return `<!-- /* On sign in change the property of ddn-name class to display block */ -->
    <!-- /* On sign in change the property of sign class to display none */ -->
    <div id="logo">
        <img src="https://64.media.tumblr.com/78aa4e4d291288b353bfeb6c02ec5bb8/65df1d7671104852-d8/s1280x1920/ff3615535a4f4ef46e24cb0d3533cba522aa2c57.pnj" alt="">
    </div>
    <div id="search_div">
        <input type="text" id="search_book" placeholder="Search">
        <button id="search_btn"><span class="material-symbols-outlined">search</span></button>
    </div>

    <div id="links" class="links">
        <a href="">About</a>
        <a href="">Contact</a>
        <div class="sign" id="sign">
            <button id="SignIn">Sing In</button>

            <div id="signIn-ddn" class="signIn-ddn">
                <a href="" class="sign">Sign In as Customer</a>
                <a href="" class="sign">Sign In as Admin</a>
            </div>
        </div>

        <a href="./authentication/auth_signup.html" class="sign" id="sign-up">Sign Up</a>

        <div class="dropdown">
            <div class="ddn-name">
                <button id="log-name"></button>
                <span class="material-symbols-outlined">arrow_drop_down</span>
            </div>
            <div id="dropdown-content" class="dropdown-content">
                <a href="">Dashboard</a>
                <a href="">Account Info</a>
                <a href="">Notification</a>
                <a href="">Sign Out</a>
            </div>

        </div> 
    </div>
    <div id="ham"><span class="material-symbols-outlined">menu</span></div>
    
}
//create div with navbar id as well as class and append this data
export { navbar_fn };

