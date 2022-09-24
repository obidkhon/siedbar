<template>
    <aside :class="`${is_main&&'is_main'} `" >
   
        
        
        
        <div class="logo">
            <img src="../assets/vue.svg" alt="">
            <!--this is imagee -->

            </div>

            <div class="menue-tageele-wrop">

                <button class="menue-taggel" @click="NewToggle">
                    <span class="material-icons" >
                        keyboard_double_arrow_right</span>
                </button>

                
            </div>
            <h3> Menu oo</h3>

            <div class="menu">
                <routerLink class="button" to="/">
                       
                    <span  class="material-icons"> home</span>
                    <span class="text"> Home</span>

                </routerLink>
                <routerLink class="button" to="/about">
                       
                       <span  class="material-icons">description</span>
                       <span class="text">About</span>
   
                </routerLink>


                <routerLink class="button" to="/teem">
                       
                       <span  class="material-icons">group </span>
                       <span class="text"> Teem</span>
   
                </routerLink>

                <routerLink class="button" to="/contact">
                       
                       <span  class="material-icons"> email</span>
                       <span class="text">contact</span>
   
                </routerLink>

</div>

            
        
        
      
          

            <div class="flex"></div>


            <div class="menu">
            
            <routerLink class="button" to="/">

                <span  class="material-icons"> settings</span>
            <span class="text"> settings</span>
        </routerLink>
                 </div>   

        


    </aside>
</template>

<script setup>
    import {ref}from "vue"

    const is_main=ref(localStorage.getItem("is_main")==="true")

    const NewToggle=()=>{
        is_main.value= !is_main.value
        localStorage.setItem("is_main", is_main.value)
    }
    

</script>

<style lang="scss" scoped>
    
aside{
    display: flex;
    flex-direction: column;
    background-color:var(--dark);
    width: var(--sidebar-width);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;
width: calc(2rem + 32px);
    color: rgb(244, 251, 251);

    transition: 0.2s ease-in-out;

    .flex{
        flex: 1 1 0;
    }


    .logo {
		margin-bottom: 1rem;
		img {
			width: 2rem;
		}
	}



    .menue-tageele-wrop{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;
        position: relative;
        top: 0;
        transition: 00.2s ease-out;
       
.menue-taggel{
    transition: 00.2s ease-out;
    .material-icons{
        font-size: 22px;
        color: var(--light);
       
    }
    &:hover{
        .material-icons{

            color:var(--primary);
            transform: translateX(0.5rem);
        }

    }

}
    }

    h3,.button .text{
        opacity: 0;
        transition: 0.3s ease-out;


    }


          .menu{
        margin: 0 -1rem; 


        .button{
          
            display: flex;
			align-items: center;
			text-decoration: none;
			transition: 0.2s ease-out;
			padding: 0.5rem 1rem;
   

        
			 .material-icons{
				font-size: 2rem;
				color: var(--light);
				transition: 0.2s ease-out;

			}

            .text {
				color: var(--light);
				transition: 0.2s ease-out;
			}

            &:hover  {
				background-color: var(--dark-alt);
                        
				.material-icons, .text {
					color: var(--primary);

				}
            }
            &.router-link-exact-active {
				background-color: var(--dark-alt);
				border-right: 5px solid var(--primary);
                padding: -1.5rem;     
				.material-icons, .text {
					color: var(--primary);
                    padding: -1.5rem;     
				}
			}

           

    }


    }

&.is_main{
    width: var(--sidebar-width);
    .menue-tageele-wrop{
        top: -3rem;
        .menue-taggel{
            transform: rotate(-180deg);

        }
    }

    h3,.button .text{
        opacity: 1;
        transition: 0.3s ease-out;




    }
    h3{
        font-size: 0.875rem;
        color: var(--grey);
        margin-bottom: 0.5rem;
        text-transform: uppercase;
    }

    .button{
    .material-icons{
        margin-right: 1rem;
    }
}
}

    @media (max-width:768px) {
        position: fixed;
        z-index: 99;
        
    }


}

</style>