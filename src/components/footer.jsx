import { Typography } from "@material-tailwind/react";

const ASCIIart = "\n   .         *     ,MMM8&&&.            *\n                  MMMM88&&&&&    .\n                 MMMM88&&&&&&&\n     *           MMM88&&&&&&&&\n                 MMM88&&&&&&&&\t      .\n                 'MMM88&&&&&&'\n     .             'MMM8&&&'      \n\t\t\t*\n                                   * \n             /\\/|_       _/\\\\\n            /    u\\    /^   ~\\   .              \n *          \\    = Y =T_=    /\n             )==*(`     `) ~ \\\n            /     \\     /     \\      *\n    .       |     |     ) ~   (\n           /       \\   /     ~ \\\n           \\       /   \\~     ~/\n _/\\_/\\_/\\_/\\__  _/_/\\_/\\__~__/_/\\_/\\_/\\_/\\\n|  |  |  |  | ) ) |  |  | ((  |  |  |  |  |\n|  |  |  |  |( (  |  |  |  \\\\ |  |  |  |  |\n|  |  |  |  | )_) |  |  |  |))|  |  |  |  |\n|  |  |  |  |  |  |  |  |  (/ |  |  |  |  |\n|  |  |  |  |  |  |  |  |  |  |  |  |  |  |\n"

export function SimpleFooter() {
    return (
        <footer className="flex justify-center">
            <pre className="text-art text-left font-mono leading-tight whitespace-pre">
                {ASCIIart}
            </pre>
        </footer>
    );
}