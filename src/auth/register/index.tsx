import { twMerge } from 'tailwind-merge';
import { Dashboard } from '../_common/assets/dashboard';
import absenceSpotLogo from '@/assets/absence-spot-logo.svg';
import { Link, NavLink } from 'react-router-dom';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as LabelPrimitive from '@radix-ui/react-label';
import { CheckIcon } from 'lucide-react';
import { GoogleLogo, MicrosoftLogo } from '../_common/assets/logos';
import { Banner } from '../../_common/layout/Banner';
import { useEffect, useState } from 'react';
import { RANDOM_STRING_SIZE, VERIFY_CODE_SIZE } from '@/constants/utils/constants';
import { GetGoogleAuthenticationUrl, GetMicrosoftAuthenticationUrl } from '@/constants/webapi/auth';

export const Register = () => {
    const [microsoftUrl, setMicrosoftUrl] = useState<string>('');
    const [googleUrl, setGoogleUrl] = useState<string>('');

    useEffect(() => {
        async function init() {
            const nonce = generateRandomString(RANDOM_STRING_SIZE);
            let codeVerifier = generateRandomString(VERIFY_CODE_SIZE);
            let codeChallenge = await generateCodeChallenge(codeVerifier);

            if (!sessionStorage.getItem('codeVerifier')) {
                sessionStorage.setItem('codeVerifier', codeVerifier);
                sessionStorage.setItem('codeChallenge', codeChallenge);
            } else {
                codeVerifier = sessionStorage.getItem('codeVerifier') as string;
                codeChallenge = sessionStorage.getItem('codeChallenge') as string;
            }

            const googleAuthenticationUrl = await GetGoogleAuthenticationUrl(nonce);
            const microsoftAuthenticationUrl = await GetMicrosoftAuthenticationUrl(codeChallenge);

            setMicrosoftUrl(microsoftAuthenticationUrl);
            setGoogleUrl(googleAuthenticationUrl);
        }
        init();
    }, []);

    return (
        <article className="h-screen flex relative overflow-hidden text-sm">
            <section className="w-full md:w-1/2 overflow-hidden">
                <div className="flex flex-col h-full overflow-hidden">
                    <header className="flex flex-col md:flex-row justify-between items-center gap-4 p-3 md:p-8">
                        <Link to={`/auth/register`} className="">
                            <img src={absenceSpotLogo} alt="absence spot" className="w-40" />
                        </Link>

                        <nav className="flex gap-4">
                            <NavLink
                                className={({ isActive }) =>
                                    twMerge(
                                        'text-slate-400 hover:text-slate-800 transition duration-200 ease-in-out',
                                        isActive && 'text-slate-800'
                                    )
                                }
                                to={'/auth/login'}
                            >
                                Already have an account? <span className="font-bold"> Login</span>
                            </NavLink>
                        </nav>
                    </header>
                    <section className="flex-1 flex overflow-y-auto ">
                        <div className="w-full h-full flex justify-center  p-3 md:p-8">
                            <div className="flex-1 space-y-10 max-w-md ">
                                <header className="space-y-2 text-center md:text-left">
                                    <h1 className="text-slate-700 font-bold text-2xl">
                                        Create New Account!
                                    </h1>
                                    <p className="text-slate-500 text-base ">
                                        No credit card required. Have access to all features!
                                    </p>
                                </header>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <form
                                        // action="http://localhost:7071/api/authentication/external-login?provider=Google&returnUrl=/home"
                                        // method="post"
                                        className="w-full md:w-1/2"
                                    >
                                        <Link
                                            to={googleUrl}
                                            className="w-full  p-3 flex justify-center items-center gap-2 border-solid rounded-md border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all ease-in-out duration-300"
                                        >
                                            <GoogleLogo /> Sign up with Google
                                        </Link>
                                    </form>

                                    <form
                                        // action="http://localhost:7071/api/authentication/external-login?provider=Microsoft&returnUrl=/home"
                                        // method="post"
                                        className="w-full md:w-1/2"
                                    >
                                        <Link
                                            to={microsoftUrl}
                                            className="w-full p-3 flex justify-center items-center gap-2 border-solid rounded-md border border-slate-200 text-slate-600 text-sm hover:bg-slate-50 transition-all ease-in-out duration-300"
                                        >
                                            <MicrosoftLogo /> Sign up with Microsoft
                                        </Link>
                                    </form>
                                </div>
                                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-slate-200 after:mt-0.5 after:flex-1 after:border-t after:border-slate-200">
                                    <p className="mx-4 mb-0 text-center  text-slate-300">
                                        Or continue with email
                                    </p>
                                </div>
                                <form action="" className="space-y-5">
                                    <div className="space-y-2">
                                        <label className="text-slate-500" htmlFor="email">
                                            Work email
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="email@company.com"
                                            className="block bg-slate-100 rounded-lg p-3 px-4 outline-primary-900 w-full text-slate-700 placeholder-slate-400"
                                        />
                                    </div>
                                    <div className="">
                                        <LabelPrimitive.Label
                                            htmlFor="c1"
                                            className="select-none text-sm font-medium text-slate-500 flex items-center gap-2"
                                        >
                                            <CheckboxPrimitive.Root
                                                id="c1"
                                                defaultChecked
                                                className={twMerge(
                                                    'rounded flex justify-between items-center flex-shrink-0 w-4 h-4 border-2 border-slate-400 bg-tranparent  aria-checked:border-primary-900 aria-checked:bg-primary-800  '
                                                )}
                                            >
                                                <CheckboxPrimitive.Indicator>
                                                    <CheckIcon className="h-3 w-3  self-center text-white" />
                                                </CheckboxPrimitive.Indicator>
                                            </CheckboxPrimitive.Root>
                                            I agree to Term of Conditions and Privacy Policy
                                        </LabelPrimitive.Label>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full  px-6 text-white text-sm bg-primary-900 p-3 rounded-lg hover:bg-primary-950 transition-all ease-in-out duration-300"
                                        >
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
            <Banner
                title="Management with AbsenceSpot!"
                description="The all-in-one solution for effortless time-off requests, seamless vacation and sick day tracking, and efficient employee schedule management."
            />
            {/* <section className="hidden md:block w-1/2 bg-primary-100">
                <div className="ml-24 mt-24 space-y-6">
                    <h2 className="font-extrabold text-3xl text-slate-800">
                        Management with AbsenceSpot!
                    </h2>
                    <p className="text-base text-slate-500 max-w-xl">
                        The all-in-one solution for effortless time-off requests, seamless vacation
                        and sick day tracking, and efficient employee schedule management.
                    </p>
                    <div className="flex gap-2">
                        <div
                            className={twMerge(
                                'h-2 w-2 bg-primary-400 rounded-full cursor-pointer transition-all ease-in-out duration-200 ',
                                num <= 1 ? ' w-4 bg-primary-900' : ''
                            )}
                        ></div>
                        <div
                            className={twMerge(
                                'h-2 w-2 bg-primary-400 rounded-full cursor-pointer transition-all ease-in-out duration-200 ',
                                num === 2 ? ' w-4 bg-primary-900' : ''
                            )}
                        ></div>
                        <div
                            className={twMerge(
                                'h-2 w-2 bg-primary-400 rounded-full cursor-pointer transition-all ease-in-out duration-200 ',
                                num === 3 ? ' w-4 bg-primary-900' : ''
                            )}
                        ></div>
                        <div
                            className={twMerge(
                                'h-2 w-2 bg-primary-400 rounded-full cursor-pointer transition-all ease-in-out duration-200 ',
                                num === 4 ? ' w-4 bg-primary-900' : ''
                            )}
                        ></div>
                    </div>
                    <div>
                        <Dashboard />
                    </div>
                </div>
            </section> */}
        </article>
    );
};

// async function generateCodeChallenge() {
//     // Generate a random array of bytes
//     const array = new Uint8Array(96);
//     crypto.getRandomValues(array);

//     // Convert the array to a hexadecimal string
//     let hexString = '';
//     for (let i = 0; i < array.length; i++) {
//         hexString += ('0' + array[i].toString(16)).slice(-2);
//     }
//     // Hash the hexadecimal string using SHA-256
//     const hashedString = await sha256(hexString);

//     // Convert the hashed string to base64 URL encoded format
//     const base64Encoded = base64URLEncode(hashedString);

//     // Take the first 43 characters as the code_challenge
//     const codeChallenge = base64Encoded.substr(0, 43);

//     console.log('verifier: ', hexString, 'codeChallenge: ', codeChallenge);
//     return codeChallenge;
// }

// async function sha256(plain) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(plain);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//     return hashBuffer;
// }

// function base64URLEncode(buffer) {
//     let str = '';
//     const bytes = new Uint8Array(buffer);
//     const len = bytes.byteLength;
//     for (let i = 0; i < len; i++) {
//         str += String.fromCharCode(bytes[i]);
//     }
//     return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
// }
