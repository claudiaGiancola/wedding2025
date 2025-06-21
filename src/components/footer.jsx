import { Typography } from "@material-tailwind/react";

const ASCIIart = "\n\n   .         *     ,MMM8&&&.            *\n                  MMMM88&&&&&    .\n                 MMMM88&&&&&&&\n     *           MMM88&&&&&&&&\n                 MMM88&&&&&&&&\t      .\n                 'MMM88&&&&&&'\n     .             'MMM8&&&'\n\t\t\t*\n                                   * \n             /\\/|_       _/\\\\\n            /    u\\    /^   ~\\   .\n *          \\    = Y =T_=    /\n             )==*(`     `) ~ \\\n            /     \\     /     \\      *\n    .       |     |     ) ~   (\n           /       \\   /     ~ \\\n           \\       /   \\~     ~/\n _/\\_/\\_/\\_/\\__  _/_/\\_/\\__~__/_/\\_/\\_/\\_/\\\n|  |  |  |  | ) ) |  |  | ((  |  |  |  |  |\n|  |  |  |  |( (  |  |  |  \\\\ |  |  |  |  |\n|  |  |  |  | )_) |  |  |  |))|  |  |  |  |\n|  |  |  |  |  |  |  |  |  (/ |  |  |  |  |\n|  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n \n"

export function SimpleFooter() {
    return (
        <div className="flex flex-col items-center mt-12 mb-3">
            <Typography variant="h3" className="text-blue-gray-800 px-6 w-2/3">Grazie di condividere questo momento speciale con noi!</Typography>
            <footer className="flex flex-col items-center gap-4">
                <pre className="text-art text-left font-mono leading-tight whitespace-pre text-blue-gray-800">
                    {ASCIIart}
                </pre>
                <Typography variant="lead" className="mb-[2rem] text-blue-gray-800">Giada&Claudia 2025</Typography>
            </footer>
        </div>
    );
}