import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { SignUpButton } from '@clerk/clerk-react'

const Auth = () => {
    return (
        <div>
            <div className="user">
                <SignedOut>
                    <SignInButton>
                        <button className="btn1">Log In</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
                <header>
                    <SignedOut>
                        <SignUpButton>
                            <button className='btn'>Sign Up</button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </header>
            </div>
        </div>
    )
}

export default Auth
