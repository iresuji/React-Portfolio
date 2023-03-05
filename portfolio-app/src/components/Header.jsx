import React from "react";

function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="/Home">Home <span class="sr-only"></span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/Contact">Contact</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/Projects" role="button" data-toggle="dropdown" aria-expanded="false">
                                Projects
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Project 1</a>
                                <a class="dropdown-item" href="#">Project 2</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Project 3</a>
                            </div>
                        </li>

                    </ul>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
            </nav>
        </div>
    )

}

export default Header;


