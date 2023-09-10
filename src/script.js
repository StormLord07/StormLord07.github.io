const languageColors = {
    "1C Enterprise": "#814CCC",
    "2-Dimensional Array": "#38761D",
    "4D": "#004289",
    "ABAP": "#E8274B",
    "ABAP CDS": "#555e25",
    "AGS Script": "#B9D9FF",
    "AIDL": "#34EB6B",
    "AL": "#3AA2B5",
    "AMPL": "#E6EFBB",
    "ANTLR": "#9DC3FF",
    "API Blueprint": "#2ACCA8",
    "APL": "#5A8164",
    "ASP.NET": "#9400ff",
    "ATS": "#1ac620",
    "ActionScript": "#882B0F",
    "Ada": "#02f88c",
    "Adblock Filter List": "#800000",
    "Adobe Font Metrics": "#fa0f00",
    "Agda": "#315665",
    "Alloy": "#64C800",
    "Alpine Abuild": "#0D597F",
    "Altium Designer": "#A89663",
    "AngelScript": "#C7D7DC",
    "Ant Build System": "#A9157E",
    "Antlers": "#ff269e",
    "ApacheConf": "#d12127",
    "Apex": "#1797c0",
    "Apollo Guidance Computer": "#0B3D91",
    "AppleScript": "#101F1F",
    "Arc": "#aa2afe",
    "AsciiDoc": "#73a0c5",
    "AspectJ": "#a957b0",
    "Assembly": "#6E4C13",
    "Astro": "#ff5a03",
    "Asymptote": "#ff0000",
    "Augeas": "#9CC134",
    "AutoHotkey": "#6594b9",
    "AutoIt": "#1C3552",
    "Avro IDL": "#0040FF",
    "Awk": "#c30e9b",
    "BASIC": "#ff0000",
    "Ballerina": "#FF5000",
    "Batchfile": "#C1F12E",
    "Beef": "#a52f4e",
    "Berry": "#15A13C",
    "BibTeX": "#778899",
    "Bicep": "#519aba",
    "Bikeshed": "#5562ac",
    "Bison": "#6A463F",
    "BitBake": "#00bce4",
    "Blade": "#f7523f",
    "BlitzBasic": "#00FFAE",
    "BlitzMax": "#cd6400",
    "Bluespec": "#12223c",
    "Boo": "#d4bec1",
    "Boogie": "#c80fa0",
    "Brainfuck": "#2F2530",
    "BrighterScript": "#66AABB",
    "Brightscript": "#662D91",
    "Browserslist": "#ffd539",
    "C": "#555555",
    "C#": "#178600",
    "C++": "#f34b7d",
    "CAP CDS": "#0092d1",
    "CLIPS": "#00A300",
    "CMake": "#DA3434",
    "COLLADA": "#F1A42B",
    "CSON": "#244776",
    "CSS": "#563d7c",
    "CSV": "#237346",
    "CUE": "#5886E1",
    "CWeb": "#00007a",
    "Cabal Config": "#483465",
    "Cadence": "#00ef8b",
    "Cairo": "#ff4a48",
    "CameLIGO": "#3be133",
    "Cap'n Proto": "#c42727",
    "Ceylon": "#dfa535",
    "Chapel": "#8dc63f",
    "ChucK": "#3f8000",
    "Circom": "#707575",
    "Cirru": "#ccccff",
    "Clarion": "#db901e",
    "Clarity": "#5546ff",
    "Classic ASP": "#6a40fd",
    "Clean": "#3F85AF",
    "Click": "#E4E6F3",
    "Clojure": "#db5855",
    "Closure Templates": "#0d948f",
    "Cloud Firestore Security Rules": "#FFA000",
    "CodeQL": "#140f46",
    "CoffeeScript": "#244776",
    "ColdFusion": "#ed2cd6",
    "ColdFusion CFC": "#ed2cd6",
    "Common Lisp": "#3fb68b",
    "Common Workflow Language": "#B5314C",
    "Component Pascal": "#B0CE4E",
    "Coq": "#d0b68c",
    "Crystal": "#000100",
    "Csound": "#1a1a1a",
    "Csound Document": "#1a1a1a",
    "Csound Score": "#1a1a1a",
    "Cuda": "#3A4E3A",
    "Curry": "#531242",
    "Cypher": "#34c0eb",
    "Cython": "#fedf5b",
    "D": "#ba595e",
    "D2": "#526ee8",
    "DM": "#447265",
    "Dafny": "#FFEC25",
    "Darcs Patch": "#8eff23",
    "Dart": "#00B4AB",
    "DataWeave": "#003a52",
    "Debian Package Control File": "#D70751",
    "DenizenScript": "#FBEE96",
    "Dhall": "#dfafff",
    "DirectX 3D File": "#aace60",
    "Dockerfile": "#384d54",
    "Dogescript": "#cca760",
    "Dotenv": "#e5d559",
    "Dylan": "#6c616e",
    "E": "#ccce35",
    "ECL": "#8a1267",
    "ECLiPSe": "#001d9d",
    "EJS": "#a91e50",
    "EQ": "#a78649",
    "Earthly": "#2af0ff",
    "Easybuild": "#069406",
    "Ecere Projects": "#913960",
    "Ecmarkup": "#eb8131",
    "EditorConfig": "#fff1f2",
    "Eiffel": "#4d6977",
    "Elixir": "#6e4a7e",
    "Elm": "#60B5CC",
    "Elvish": "#55BB55",
    "Elvish Transcript": "#55BB55",
    "Emacs Lisp": "#c065db",
    "EmberScript": "#FFF4F3",
    "Erlang": "#B83998",
    "Euphoria": "#FF790B",
    "F#": "#b845fc",
    "F*": "#572e30",
    "FIGlet Font": "#FFDDBB",
    "FLUX": "#88ccff",
    "Factor": "#636746",
    "Fancy": "#7b9db4",
    "Fantom": "#14253c",
    "Faust": "#c37240",
    "Fennel": "#fff3d7",
    "Filebench WML": "#F6B900",
    "Fluent": "#ffcc33",
    "Forth": "#341708",
    "Fortran": "#4d41b1",
    "Fortran Free Form": "#4d41b1",
    "FreeBasic": "#141AC9",
    "FreeMarker": "#0050b2",
    "Frege": "#00cafe",
    "Futhark": "#5f021f",
    "G-code": "#D08CF2",
    "GAML": "#FFC766",
    "GAMS": "#f49a22",
    "GAP": "#0000cc",
    "GCC Machine Description": "#FFCFAB",
    "GDScript": "#355570",
    "GEDCOM": "#003058",
    "GLSL": "#5686a5",
    "GSC": "#FF6800",
    "Game Maker Language": "#71b417",
    "Gemfile.lock": "#701516",
    "Gemini": "#ff6900",
    "Genero": "#63408e",
    "Genero Forms": "#d8df39",
    "Genie": "#fb855d",
    "Genshi": "#951531",
    "Gentoo Ebuild": "#9400ff",
    "Gentoo Eclass": "#9400ff",
    "Gerber Image": "#d20b00",
    "Gherkin": "#5B2063",
    "Git Attributes": "#F44D27",
    "Git Config": "#F44D27",
    "Git Revision List": "#F44D27",
    "Gleam": "#ffaff3",
    "Glyph": "#c1ac7f",
    "Gnuplot": "#f0a9f0",
    "Go": "#00ADD8",
    "Go Checksums": "#00ADD8",
    "Go Module": "#00ADD8",
    "Go Workspace": "#00ADD8",
    "Godot Resource": "#355570",
    "Golo": "#88562A",
    "Gosu": "#82937f",
    "Grace": "#615f8b",
    "Gradle": "#02303a",
    "Grammatical Framework": "#ff0000",
    "GraphQL": "#e10098",
    "Graphviz (DOT)": "#2596be",
    "Groovy": "#4298b8",
    "Groovy Server Pages": "#4298b8",
    "HAProxy": "#106da9",
    "HCL": "#844FBA",
    "HLSL": "#aace60",
    "HOCON": "#9ff8ee",
    "HTML": "#e34c26",
    "HTML+ECR": "#2e1052",
    "HTML+EEX": "#6e4a7e",
    "HTML+ERB": "#701516",
    "HTML+PHP": "#4f5d95",
    "HTML+Razor": "#512be4",
    "HTTP": "#005C9C",
    "HXML": "#f68712",
    "Hack": "#878787",
    "Haml": "#ece2a9",
    "Handlebars": "#f7931e",
    "Harbour": "#0e60e3",
    "Haskell": "#5e5086",
    "Haxe": "#df7900",
    "HiveQL": "#dce200",
    "HolyC": "#ffefaf",
    "Hosts File": "#308888",
    "Hy": "#7790B2",
    "IDL": "#a3522f",
    "IGOR Pro": "#0000cc",
    "INI": "#d1dbe0",
    "Idris": "#b30000",
    "Ignore List": "#000000",
    "ImageJ Macro": "#99AAFF",
    "Imba": "#16cec6",
    "Inno Setup": "#264b99",
    "Io": "#a9188d",
    "Ioke": "#078193",
    "Isabelle": "#FEFE00",
    "Isabelle ROOT": "#FEFE00",
    "J": "#9EEDFF",
    "JAR Manifest": "#b07219",
    "JCL": "#d90e09",
    "JFlex": "#DBCA00",
    "JSON": "#292929",
    "JSON with Comments": "#292929",
    "JSON5": "#267CB9",
    "JSONLD": "#0c479c",
    "JSONiq": "#40d47e",
    "Janet": "#0886a5",
    "Jasmin": "#d03600",
    "Java": "#b07219",
    "Java Properties": "#2A6277",
    "Java Server Pages": "#2A6277",
    "JavaScript": "#f1e05a",
    "JavaScript+ERB": "#f1e05a",
    "Jest Snapshot": "#15c213",
    "JetBrains MPS": "#21D789",
    "Jinja": "#a52a22",
    "Jison": "#56b3cb",
    "Jison Lex": "#56b3cb",
    "Jolie": "#843179",
    "Jsonnet": "#0064bd",
    "Julia": "#a270ba",
    "Jupyter Notebook": "#DA5B0B",
    "Just": "#384d54",
    "KRL": "#28430A",
    "Kaitai Struct": "#773b37",
    "KakouneScript": "#6f8042",
    "KerboScript": "#41adf0",
    "KiCad Layout": "#2f4aab",
    "KiCad Legacy Layout": "#2f4aab",
    "KiCad Schematic": "#2f4aab",
    "Kotlin": "#A97BFF",
    "LFE": "#4C3023",
    "LLVM": "#185619",
    "LOLCODE": "#cc9900",
    "LSL": "#3d9970",
    "LabVIEW": "#fede06",
    "Lark": "#2980B9",
    "Lasso": "#999999",
    "Latte": "#f2a542",
    "Less": "#1d365d",
    "Lex": "#DBCA00",
    "LigoLANG": "#0e74ff",
    "LilyPond": "#9ccc7c",
    "Liquid": "#67b8de",
    "Literate Agda": "#315665",
    "Literate CoffeeScript": "#244776",
    "Literate Haskell": "#5e5086",
    "LiveScript": "#499886",
    "Logtalk": "#295b9a",
    "LookML": "#652B81",
    "Lua": "#000080",
    "MATLAB": "#e16737",
    "MAXScript": "#00a6a6",
    "MDX": "#fcb32c",
    "MLIR": "#5EC8DB",
    "MQL4": "#62A8D6",
    "MQL5": "#4A76B8",
    "MTML": "#b7e1f4",
    "Macaulay2": "#d8ffff",
    "Makefile": "#427819",
    "Mako": "#7e858d",
    "Markdown": "#083fa1",
    "Marko": "#42bff2",
    "Mask": "#f97732",
    "Mathematica": "#dd1100",
    "Max": "#c4a79c",
    "Mercury": "#ff2b2b",
    "Mermaid": "#ff3670",
    "Meson": "#007800",
    "Metal": "#8f14e9",
    "MiniYAML": "#ff1111",
    "Mint": "#02b046",
    "Mirah": "#c7a938",
    "Modelica": "#de1d31",
    "Modula-2": "#10253f",
    "Modula-3": "#223388",
    "Monkey C": "#8D6747",
    "MoonScript": "#ff4585",
    "Motoko": "#fbb03b",
    "Motorola 68K Assembly": "#005daa",
    "Move": "#4a137a",
    "Mustache": "#724b3b",
    "NCL": "#28431f",
    "NPM Config": "#cb3837",
    "NWScript": "#111522",
    "Nasal": "#1d2c4e",
    "Nearley": "#990000",
    "Nemerle": "#3d3c6e",
    "NetLinx": "#0aa0ff",
    "NetLinx+ERB": "#747faa",
    "NetLogo": "#ff6375",
    "NewLisp": "#87AED7",
    "Nextflow": "#3ac486",
    "Nginx": "#009639",
    "Nim": "#ffc200",
    "Nit": "#009917",
    "Nix": "#7e7eff",
    "Nu": "#c9df40",
    "NumPy": "#9C8AF9",
    "Nunjucks": "#3d8137",
    "Nushell": "#4E9906",
    "OASv2-json": "#85ea2d",
    "OASv2-yaml": "#85ea2d",
    "OASv3-json": "#85ea2d",
    "OASv3-yaml": "#85ea2d",
    "OCaml": "#ef7a08",
    "ObjectScript": "#424893",
    "Objective-C": "#438eff",
    "Objective-C++": "#6866fb",
    "Objective-J": "#ff0c5a",
    "Odin": "#60AFFE",
    "Omgrofl": "#cabbff",
    "Opal": "#f7ede0",
    "Open Policy Agent": "#7d9199",
    "OpenAPI Specification v2": "#85ea2d",
    "OpenAPI Specification v3": "#85ea2d",
    "OpenCL": "#ed2e2d",
    "OpenEdge ABL": "#5ce600",
    "OpenQASM": "#AA70FF",
    "OpenSCAD": "#e5cd45",
    "Option List": "#476732",
    "Org": "#77aa99",
    "Oxygene": "#cdd0e3",
    "Oz": "#fab738",
    "P4": "#7055b5",
    "PDDL": "#0d00ff",
    "PEG.js": "#234d6b",
    "PHP": "#4F5D95",
    "PLSQL": "#dad8d8",
    "PLpgSQL": "#336790",
    "POV-Ray SDL": "#6bac65",
    "Pact": "#F7A8B8",
    "Pan": "#cc0000",
    "Papyrus": "#6600cc",
    "Parrot": "#f3ca0a",
    "Pascal": "#E3F171",
    "Pawn": "#dbb284",
    "Pep8": "#C76F5B",
    "Perl": "#0298c3",
    "PicoLisp": "#6067af",
    "PigLatin": "#fcd7de",
    "Pike": "#005390",
    "PlantUML": "#fbbd16",
    "PogoScript": "#d80074",
    "Polar": "#ae81ff",
    "Portugol": "#f8bd00",
    "PostCSS": "#dc3a0c",
    "PostScript": "#da291c",
    "PowerBuilder": "#8f0f8d",
    "PowerShell": "#012456",
    "Prisma": "#0c344b",
    "Processing": "#0096D8",
    "Procfile": "#3B2F63",
    "Prolog": "#74283c",
    "Promela": "#de0000",
    "Propeller Spin": "#7fa2a7",
    "Pug": "#a86454",
    "Puppet": "#302B6D",
    "PureBasic": "#5a6986",
    "PureScript": "#1D222D",
    "Pyret": "#ee1e10",
    "Python": "#3572A5",
    "Python console": "#3572A5",
    "Python traceback": "#3572A5",
    "Q#": "#fed659",
    "QML": "#44a51c",
    "Qt Script": "#00b841",
    "Quake": "#882233",
    "R": "#198CE7",
    "RAML": "#77d9fb",
    "RBS": "#701516",
    "RDoc": "#701516",
    "REXX": "#d90e09",
    "RMarkdown": "#198ce7",
    "RPGLE": "#2BDE21",
    "RUNOFF": "#665a4e",
    "Racket": "#3c5caa",
    "Ragel": "#9d5200",
    "Raku": "#0000fb",
    "Rascal": "#fffaa0",
    "ReScript": "#ed5051",
    "Reason": "#ff5847",
    "ReasonLIGO": "#ff5847",
    "Rebol": "#358a5b",
    "Record Jar": "#0673ba",
    "Red": "#f50000",
    "Regular Expression": "#009a00",
    "Ren'Py": "#ff7f7f",
    "Ring": "#2D54CB",
    "Riot": "#A71E49",
    "RobotFramework": "#00c0b5",
    "Roff": "#ecdebe",
    "Roff Manpage": "#ecdebe",
    "Rouge": "#cc0088",
    "RouterOS Script": "#DE3941",
    "Ruby": "#701516",
    "Rust": "#dea584",
    "SAS": "#B34936",
    "SCSS": "#c6538c",
    "SPARQL": "#0C4597",
    "SQF": "#3F3F3F",
    "SQL": "#e38c00",
    "SQLPL": "#e38c00",
    "SRecode Template": "#348a34",
    "STL": "#373b5e",
    "SVG": "#ff9900",
    "SaltStack": "#646464",
    "Sass": "#a53b70",
    "Scala": "#c22d40",
    "Scaml": "#bd181a",
    "Scenic": "#fdc700",
    "Scheme": "#1e4aec",
    "Scilab": "#ca0f21",
    "Self": "#0579aa",
    "ShaderLab": "#222c37",
    "Shell": "#89e051",
    "ShellCheck Config": "#cecfcb",
    "Shen": "#120F14",
    "Simple File Verification": "#C9BFED",
    "Singularity": "#64E6AD",
    "Slash": "#007eff",
    "Slice": "#003fa2",
    "Slim": "#2b2b2b",
    "SmPL": "#c94949",
    "Smalltalk": "#596706",
    "Smarty": "#f0c040",
    "Smithy": "#c44536",
    "Snakemake": "#419179",
    "Solidity": "#AA6746",
    "SourcePawn": "#f69e1d",
    "Squirrel": "#800000",
    "Stan": "#b2011d",
    "Standard ML": "#dc566d",
    "Starlark": "#76d275",
    "Stata": "#1a5f91",
    "StringTemplate": "#3fb34f",
    "Stylus": "#ff6347",
    "SubRip Text": "#9e0101",
    "SugarSS": "#2fcc9f",
    "SuperCollider": "#46390b",
    "Svelte": "#ff3e00",
    "Sway": "#dea584",
    "Swift": "#F05138",
    "SystemVerilog": "#DAE1C2",
    "TI Program": "#A0AA87",
    "TL-Verilog": "#C40023",
    "TLA": "#4b0079",
    "TOML": "#9c4221",
    "TSQL": "#e38c00",
    "TSV": "#237346",
    "TSX": "#3178c6",
    "TXL": "#0178b8",
    "Talon": "#333333",
    "Tcl": "#e4cc98",
    "TeX": "#3D6117",
    "Terra": "#00004c",
    "TextMate Properties": "#df66e4",
    "Textile": "#ffe7ac",
    "Thrift": "#D12127",
    "Turing": "#cf142b",
    "Twig": "#c1d026",
    "TypeScript": "#3178c6",
    "Unified Parallel C": "#4e3617",
    "Unity3D Asset": "#222c37",
    "Uno": "#9933cc",
    "UnrealScript": "#a54c4d",
    "UrWeb": "#ccccee",
    "V": "#4f87c4",
    "VBA": "#867db1",
    "VBScript": "#15dcdc",
    "VCL": "#148AA8",
    "VHDL": "#adb2cb",
    "Vala": "#a56de2",
    "Valve Data Format": "#f26025",
    "Velocity Template Language": "#507cff",
    "Verilog": "#b2b7f8",
    "Vim Help File": "#199f4b",
    "Vim Script": "#199f4b",
    "Vim Snippet": "#199f4b",
    "Visual Basic .NET": "#945db7",
    "Visual Basic 6.0": "#2c6353",
    "Volt": "#1F1F1F",
    "Vue": "#41b883",
    "Vyper": "#2980b9",
    "WDL": "#42f1f4",
    "WGSL": "#1a5e9a",
    "Web Ontology Language": "#5b70bd",
    "WebAssembly": "#04133b",
    "WebAssembly Interface Type": "#6250e7",
    "Whiley": "#d5c397",
    "Wikitext": "#fc5757",
    "Windows Registry Entries": "#52d5ff",
    "Witcher Script": "#ff0000",
    "Wollok": "#a23738",
    "World of Warcraft Addon Data": "#f7e43f",
    "Wren": "#383838",
    "X10": "#4B6BEF",
    "XC": "#99DA07",
    "XML": "#0060ac",
    "XML Property List": "#0060ac",
    "XQuery": "#5232e7",
    "XSLT": "#EB8CEB",
    "Xojo": "#81bd41",
    "Xonsh": "#285EEF",
    "Xtend": "#24255d",
    "YAML": "#cb171e",
    "YARA": "#220000",
    "YASnippet": "#32AB90",
    "Yacc": "#4B6C4B",
    "Yul": "#794932",
    "ZAP": "#0d665e",
    "ZIL": "#dc75e5",
    "ZenScript": "#00BCD1",
    "Zephir": "#118f9e",
    "Zig": "#ec915c",
    "Zimpl": "#d67711",
    "eC": "#913960",
    "fish": "#4aae47",
    "hoon": "#00b171",
    "jq": "#c7254e",
    "kvlang": "#1da6e0",
    "mIRC Script": "#3d57c3",
    "mcfunction": "#E22837",
    "mupad": "#244963",
    "nanorc": "#2d004d",
    "nesC": "#94B0C7",
    "ooc": "#b0b77e",
    "q": "#0040cd",
    "reStructuredText": "#141414",
    "sed": "#64b970",
    "wisp": "#7582D1",
    "xBase": "#403a40",
    // ... Add other languages and colors as needed
};

const languageAbbreviations = {
    "JavaScript": "JS",
    "Python": "PY",
    "HTML": "HTML",
    "CSS": "CSS",
    "C++": "C++",
    "C#": "C#"
    // ... Add other languages and abbreviations as needed
};


document.addEventListener('DOMContentLoaded', function () {
    // Fetching the repositories from GitHub
    fetch('https://api.github.com/users/StormLord07/repos', {
        headers: {
        }
    })
        .then(response => response.json())
        .then(data => {

            const sortedRepos = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

            const projectContainer = document.getElementById('github-projects');

            function abbreviateLanguage(language) {
                return languageAbbreviations[language] || language;
            }

            function fetchLanguages(owner, repoName) {
                return fetch(`https://api.github.com/repos/${owner}/${repoName}/languages`, {
                    headers: {
                    }
                })
                    .then(response => response.json());
            }

            function getTopLanguages(languages) {
                return Object.entries(languages)
                    .sort((a, b) => b[1] - a[1])
                    .slice(0, 3)
                    .map(language => language[0]);
            }

            function fileExistsInRepo(owner, repoName, fileName) {
                return fetch(`https://api.github.com/repos/${owner}/${repoName}/contents/`, {
                    headers: {
                    }
                })
                    .then(response => response.json())
                    .then(files => files.some(file => file.name === fileName));
            }

            function fetchTopics(owner, repoName) {
                return fetch(`https://api.github.com/repos/${owner}/${repoName}/topics`, {
                    headers: {
                        'Accept': 'application/vnd.github.mercy-preview+json'
                    }
                })
                    .then(response => response.json())
                    .then(data => data.names);  // "names" contains the list of topics for the repository
            }

            function fetchImage(owner, repoName) {
                return fileExistsInRepo(owner, repoName, 'REPO-LOGO.png')
                    .then(exists => {
                        if (exists) return `https://raw.githubusercontent.com/${owner}/${repoName}/main/REPO-LOGO.png`;
                        else return null;
                    });
            }

            function fetchReadme(owner, repoName) {
                return fileExistsInRepo(owner, repoName, 'README.md')
                    .then(exists => {
                        if (exists) return fetch(`https://api.github.com/repos/${owner}/${repoName}/readme`, {
                            headers: {
                                'Accept': 'application/vnd.github.VERSION.html',
                            }
                        })
                            .then(response => response.text());
                        else return null;
                    })
            }

            function truncateText(content, maxLength) {
                if (content.length <= maxLength) {
                    return content;
                }
                return content.substr(0, maxLength) + '...';
            }

            function removeRepoNameAndChainImage(content, repoName) {
                const parser = new DOMParser();
                const doc = parser.parseFromString(content, 'text/html');

                // Remove h1 with repo name
                const repoNameHeader = doc.querySelector(`h1`);
                if (repoNameHeader && repoNameHeader.innerText.trim() === repoName) {
                    repoNameHeader.remove();
                }

                // Remove chain (anchor) images
                const anchorLinks = doc.querySelectorAll('a.anchor');
                anchorLinks.forEach(link => {
                    const chainImage = link.querySelector('img');
                    if (chainImage) {
                        link.remove();
                    }
                });

                return doc.body.innerHTML;
            }


            // function generateSampleTags(projectTagsContainer, numberOfTags) {
            //     const sampleTagNames = ['React', 'JavaScript', 'CSS', 'NodeJS', 'TypeScript', 'GraphQL', 'D3', 'Sass', 'Webpack', 'Vue'];

            //     for (let i = 0; i < numberOfTags; i++) {
            //         const tag = document.createElement('span');
            //         tag.textContent = sampleTagNames[Math.floor(Math.random() * sampleTagNames.length)];
            //         projectTagsContainer.appendChild(tag);
            //     }
            // }

            sortedRepos.forEach(repo => {
                const projectBox = document.createElement('a');
                projectBox.classList.add('project-box');
                projectBox.href = repo.html_url; // Set the repository URL as href
                projectBox.target = "_blank"; // This makes the link open in a new tab

                const projectImage = document.createElement('img');
                projectImage.classList.add('project-image');
                fetchImage('StormLord07', repo.name)
                    .then(imageContent => {
                        if (imageContent) {
                            projectImage.src = imageContent;
                        }
                        else {
                            projectImage.src = "content/neiroset-dlya-razrabotchikov-C.png"
                        }
                    });
                projectImage.src = 'neiroset-dlya-razrabotchikov-C.png'; // Or you could use repo-specific data if available

                const projectContent = document.createElement('div');
                projectContent.classList.add('project-content');

                const projectTitle = document.createElement('h3');
                projectTitle.textContent = repo.name;

                fetchReadme('StormLord07', repo.name)
                    .then(content => {
                        if (content) {
                            const cleanedContent = removeRepoNameAndChainImage(content, repo.name);
                            const truncatedContent = truncateText(cleanedContent, 200); // Limit to 300 characters, adjust as needed
                            const projectDescription = document.createElement('div');
                            projectDescription.classList.add('project-description');
                            projectDescription.innerHTML = truncatedContent;
                            projectContent.appendChild(projectDescription);
                        }
                    });

                // const projectTags = document.createElement('div');
                // projectTags.classList.add('tags');
                // generateSampleTags(projectTags, Math.floor(Math.random() * 8) + 20);

                const projectTags = document.createElement('div');
                projectTags.classList.add('tags');

                const projectLanguages = document.createElement('div');
                projectLanguages.classList.add('languages');

                fetchLanguages('StormLord07', repo.name)
                    .then(languages => {
                        const topLanguages = getTopLanguages(languages);
                        topLanguages.forEach(language => {
                            const tag = document.createElement('span');
                            tag.textContent = language;
                            tag.classList.add('tag');
                            tag.style.backgroundColor = "red";
                            projectTags.appendChild(tag);
                            const languageSpan = document.createElement('span');
                            languageSpan.textContent = abbreviateLanguage(language);
                            languageSpan.classList.add('language-tag');
                            languageSpan.style.backgroundColor = languageColors[language] || "#666";
                            projectLanguages.appendChild(languageSpan); // Append to projectLanguages directly
                        });
                    });


                fetchTopics('StormLord07', repo.name)
                    .then(topics => {
                        topics.forEach(topic => {
                            const tag = document.createElement('span');
                            tag.textContent = topic;
                            projectTags.appendChild(tag);
                        });
                    });

                projectContent.appendChild(projectTitle);
                projectContent.appendChild(projectLanguages);
                projectContent.appendChild(projectTags);

                projectBox.appendChild(projectImage);
                projectBox.appendChild(projectContent);

                projectContainer.appendChild(projectBox);
            });
        });
});
