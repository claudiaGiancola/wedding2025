import { Typography } from "@material-tailwind/react";

const ASCIIart = "\n\n   .         *     ,MMM8&&&.            *\n                  MMMM88&&&&&    .\n                 MMMM88&&&&&&&\n     *           MMM88&&&&&&&&\n                 MMM88&&&&&&&&\t      .\n                 'MMM88&&&&&&'\n     .             'MMM8&&&'\n\t\t\t*\n                                   * \n             /\\/|_       _/\\\\\n            /    u\\    /^   ~\\   .\n *          \\    = Y =T_=    /\n             )==*(`     `) ~ \\\n            /     \\     /     \\      *\n    .       |     |     ) ~   (\n           /       \\   /     ~ \\\n           \\       /   \\~     ~/\n _/\\_/\\_/\\_/\\__  _/_/\\_/\\__~__/_/\\_/\\_/\\_/\\\n|  |  |  |  | ) ) |  |  | ((  |  |  |  |  |\n|  |  |  |  |( (  |  |  |  \\\\ |  |  |  |  |\n|  |  |  |  | )_) |  |  |  |))|  |  |  |  |\n|  |  |  |  |  |  |  |  |  (/ |  |  |  |  |\n|  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n \n"

export function SimpleFooter() {
    return (
        <div className="flex flex-col items-center mt-12">
            <Typography variant="h3" className="text-gray px-6">Grazie di condividere questo momento speciale con noi!</Typography>
            <footer className="flex flex-col items-center gap-3">
                <pre className="text-art text-left font-mono leading-tight whitespace-pre">
                    {ASCIIart}
                </pre>
                <Typography variant="lead" className="mb-[2rem] text-gray">Giada&Claudia 2025</Typography>
            </footer>
        </div>
    );
}