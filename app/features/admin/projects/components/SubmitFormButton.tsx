import { Button } from "@/components/ui/button";

export function SubmitFormButton({ message }: { message: string }) {
    return (
        <Button className="rounded-xl bg-indigo-600/40 hover:bg-indigo-600/60 hover:cursor-pointer hover:scale-95  duration-400 transition-all" type="submit" size="lg">
            {message}
        </Button>
    )
}
