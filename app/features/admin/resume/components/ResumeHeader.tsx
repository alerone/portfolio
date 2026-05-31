import { assetURL } from "@/utils/assets";
import type { ResumeLanguage, ResumeProfile } from "../resume-types";

type ResumeHeaderProps = {
    profile: ResumeProfile;
    lang: ResumeLanguage;
};

export function ResumeHeader({ profile, lang }: ResumeHeaderProps) {
    const portfolioLabel = lang === "en" ? "More info" : "Más información";

    return (
        <header className="relative mb-2 border-b border-[#345f82] pb-2">
            <div className="grid grid-cols-[92px_1fr] items-center gap-5">
                {profile.image ? (
                    <div className="flex h-full min-h-[92px] items-center justify-center">
                        <img
                            src={assetURL(profile.image)}
                            alt={profile.fullName}
                            className="h-[92px] w-[92px] rounded-[24px] object-cover"
                        />
                    </div>
                ) : (
                    <div className="h-[92px] w-[92px]" />
                )}

                <div className="min-w-0">
                    <h1 className="text-[25px] font-black uppercase leading-none tracking-[0.12em] text-[#123f63]">
                        {profile.fullName}
                    </h1>

                    <p className="mt-0.5 text-[8px] font-extrabold uppercase tracking-[0.08em] text-[#123f63]">
                        Software Engineer | Full Stack Developer
                    </p>

                    <div className="mt-2 grid gap-0.5 text-[11px] leading-tight text-neutral-800">
                        <p>{profile.location}</p>

                        {profile.phone && <p>{profile.phone}</p>}

                        <a
                            href={`mailto:${profile.email}`}
                            className="underline decoration-neutral-400 underline-offset-2"
                        >
                            {profile.email}
                        </a>

                        {profile.portfolioUrl && (
                            <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5">
                                <a
                                    href={profile.portfolioUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline decoration-neutral-400 underline-offset-2"
                                >
                                    {profile.portfolioUrl.replace(/^https?:\/\//, "")}
                                </a>

                                <span className="font-bold text-neutral-900">
                                    {portfolioLabel}
                                </span>
                            </div>
                        )}

                        {profile.githubUrl && (
                            <a
                                href={profile.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="underline decoration-neutral-400 underline-offset-2"
                            >
                                {profile.githubUrl.replace(/^https?:\/\//, "")}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
