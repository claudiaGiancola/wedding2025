import { Typography } from "@material-tailwind/react";

const ASCIIart = "\n\n   .         *     ,MMM8&&&.            *\n                  MMMM88&&&&&    .\n                 MMMM88&&&&&&&\n     *           MMM88&&&&&&&&\n                 MMM88&&&&&&&&\t      .\n                 'MMM88&&&&&&'\n     .             'MMM8&&&'\n\t\t\t*\n                                   * \n             /\\/|_       _/\\\\\n            /    u\\    /^   ~\\   .\n *          \\    = Y =T_=    /\n             )==*(`     `) ~ \\\n            /     \\     /     \\      *\n    .       |     |     ) ~   (\n           /       \\   /     ~ \\\n           \\       /   \\~     ~/\n _/\\_/\\_/\\_/\\__  _/_/\\_/\\__~__/_/\\_/\\_/\\_/\\\n|  |  |  |  | ) ) |  |  | ((  |  |  |  |  |\n|  |  |  |  |( (  |  |  |  \\\\ |  |  |  |  |\n|  |  |  |  | )_) |  |  |  |))|  |  |  |  |\n|  |  |  |  |  |  |  |  |  (/ |  |  |  |  |\n|  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n \n"

export function SimpleFooter() {
    return (
        <div className="flex flex-col items-center pt-6">
            <Typography variant="h4" className="text-blue-gray-800 px-2 sm:px-6 lg:text-3xl w-2/3 sm:w-full">Grazie di condividere questo momento speciale con noi!</Typography>
            <footer className="flex flex-col items-center gap-2 px-4">
                <pre className="text-art text-left font-mono text-[14px] md:text-[18px] leading-tight whitespace-pre text-blue-gray-800">
                    {ASCIIart}
                </pre>
                <Typography variant="lead" className="text-blue-gray-800 text-lg">Giada&Claudia 2025</Typography>
            </footer>
        </div>
    );
}