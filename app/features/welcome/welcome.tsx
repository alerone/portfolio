import { ThreeDMe } from "~/components/3DMe";
import { Page } from "~/components/Page";
import { useGetRandomBoolean } from "~/hooks/useGetRandomBoolean";
import { useIsDesktop } from "~/hooks/useIsDesktop";

export function Welcome() {
    const title = "Álvaro López Álvarez"
    const random = useGetRandomBoolean();
    const isDesktop = useIsDesktop()
    return (
        <>
            <Page headerTitle={title}>
                <div className="absolute right-8 top-40">
                    {isDesktop &&
                        <>
                            {random ? <ThreeDMe action="lookAt" lookAt="right" /> : <ThreeDMe jump />}
                        </>
                    }
                </div>
                <div className="flex flex-col p-8 rounded-lg w-11/12 xl:w-xl bg-primary-800 shadow-md gap-2">
                    <h2 className="text-xl">Computer Science Developer</h2>
                    <p className="text-md ">
                        I am a passionate developer currently pursuing a Master's in Computer
                        Engineering at the
                        <UPV />. I completed my Bachelor's degree at the same university with a GPA
                        of 8.8.
                        <br /> <br />
                        I have a strong vocation for programming and a constant desire to learn
                        emerging technologies and languages. I spend much of my time building small
                        projects to enhance my coding skills. While I enjoy working on Backend
                        development, I am also comfortable navigating Frontend environments.
                        <br /> <br />
                        My goal is to continually expand my knowledge in programming and grow into a
                        Senior Developer with extensive expertise.
                    </p>
                </div>
            </Page>
        </>
    );
}

function UPV() {
    return (
        <a
            href="https://www.upv.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold rounded-md bg-primary-700 ml-1 p-1 hover:bg-primary-600 transition-colors"
        >
            Polytechnic University of Valencia(UPV)
        </a>
    );
}
