import { Link } from "react-router-dom";

const SignUp = () => {

    const handleRegister = () => {

    }

    return (
        <div className="min-h-screen flex justify-center items-center">
        <div className="  bg-base-200 shadow-lg h-1/2 py-10 rounded-xl">
            <div className="flex gap-x-10 lg:flex-row-reverse px-10 py-5 ">
                <div className="  w-full max-w-xl ">
                    <form onSubmit={handleRegister} className="grid grid-cols-2 gap-x-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input name="fullName" required type="text" placeholder="full name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                        </div>

                        <div className="form-control mt-4 col-span-2 flex justify-center items-center">
                            <button className="btn btn-primary w-full">Register</button>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left max-w-2xl mt-5">
                    <div>

                        <h1 className="text-5xl font-bold text-primary">MyCash </h1>
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>

                    <div>
                        <p>Already have an account ? <Link className="text-primary" to={'/login'}>Login </Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SignUp;