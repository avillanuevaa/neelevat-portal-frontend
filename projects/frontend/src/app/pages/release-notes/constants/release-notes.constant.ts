import {IBreadcrumb} from '@shared/components/title/interfaces/breadcrumb.interface';
import {IReleaseNote} from "../interfaces/release-note.interface";

export const RELEASE_NOTES_BREADCRUMBS: IBreadcrumb[] = [
  {
    name: 'pageName.home',
    link: '/home',
    svg: 'assets/media/icons/duotune/general/home-mini.svg',
  },
  {
    name: 'pageName.releaseNotes',
  },
];

export const RELEASE_NOTES: IReleaseNote[] = [
  {
    id: '2',
    name: 'April 2023',
    mod: [
      {
        id: '14',
        modName: 'Mod 2023.04.20',
        releaseDate: 'Thursday, April 20, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Improved the creation of tables"

          },
          {
            title: 'Layout updates',
            description: "- The transport create order page layout was implemented"
          },
        ]
      },
      {
        id: '13',
        modName: 'Mod 2023.04.19',
        releaseDate: 'Wednesday, April 19, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- A shared module was created\n".split("\n").join("<br />") +
              "- A separate component for team-form was created"
          },
        ]
      },
      {
        id: '12',
        modName: 'Mod 2023.04.18',
        releaseDate: 'Tuesday, April 18, 2023',
        note: [
          {
            title: 'Added organization switch',
            description: "- You can switch from one organization to another by clicking the three dots in the sidebar header"
          },
        ]
      },
      {
        id: '11',
        modName: 'Mod 2023.04.17',
        releaseDate: 'Monday, April 17, 2023',
        note: [
          {
            title: 'Translation',
            description: "- Added translations to pages"
          },
        ]
      },
      {
        id: '10',
        modName: 'Mod 2023.04.14',
        releaseDate: 'Friday, April 14, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Removed unused components from authentication flow; auth service was created"
          },
          {
            title: 'Layout updates',
            description: "- The inbound order page layout was implemented, you can access it by clicking a row in the inbound orders table"
          },
        ]
      },
      {
        id: '9',
        modName: 'Mod 2023.04.13',
        releaseDate: 'Thursday, April 13, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Created separate component for files-table; added files-table component in all the right places\n".split("\n").join("<br />") +
              "- Created a separate component for role-table; added role-table component in all the right places"
          },
        ]
      },
      {
        id: '8',
        modName: 'Mod 2023.04.12',
        releaseDate: 'Wednesday, April 12, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Deleted inline styles for all pages\n".split("\n").join("<br />") +
              "- Changed routing for containers page"
          },
          {
            title: 'Layout changes',
            description: "- Changed icon for multiselect\n".split("\n").join("<br />") +
              "- Removed whitespace around views"
          },
        ]
      },
      {
        id: '7',
        modName: 'Mod 2023.04.11',
        releaseDate: 'Tuesday, April 11, 2023',
        note: [
          {
            title: 'Current stock page updates',
            description: "- Set up downloading for the current page and all pages in PDF format\n".split("\n").join("<br />") +
              "- Set up downloading for the current page and all pages in XLSX format\n".split("\n").join("<br />") +
              "- Improved styles for current stock table\n".split("\n").join("<br />") +
              "- Added column filter\n".split("\n").join("<br />") +
              "- Improved styles for column filter"
          },
        ]
      },
      {
        id: '6',
        modName: 'Mod 2023.04.10',
        releaseDate: 'Monday, April 10, 2023',
        note: [
          {
            title: 'Current stock page updates',
            description: "- Added right side filters, set up some right side filters\n".split("\n").join("<br />") +
              "- Changed logic for the rows columns\n".split("\n").join("<br />") +
              "- Improved download button\n".split("\n").join("<br />") +
              "- Added stock tabs\n".split("\n").join("<br />") +
              "- Improved title for current stock page"
          },
          {
            title: 'Code optimizations',
            description: "- A separate component for datepicker was created and added in all the right places"
          },
          {
            title: 'Home page updates',
            description: "- Added functionality to remove widget button\n".split("\n").join("<br />") +
              "- Added button to reset to the default widget layout"
          },
        ]
      },
      {
        id: '5',
        modName: 'Mod 2023.04.07',
        releaseDate: 'Friday, April 7, 2023',
        note: [
          {
            title: 'Current stock page updates',
            description: "- Added filters to columns in the row below the table headers"
          }
        ]
      },
      {
        id: '4',
        modName: 'Mod 2023.04.06',
        releaseDate: 'Thursday, April 6, 2023',
        note: [
          {
            title: 'Current stock page updates',
            description: "- Added sorting for columns"
          }
        ]
      },
      {
        id: '3',
        modName: 'Mod 2023.04.05',
        releaseDate: 'Wednesday, April 5, 2023',
        note: [
          {
            title: 'Current stock page updates',
            description: "- Warehouse filter working by multiple selected options\n".split("\n").join("<br />") +
              "- Added button to download pages from the table\n".split("\n").join("<br />") +
              "- Column filter is working properly, the selected columns are shown\n".split("\n").join("<br />") +
              "- Row sort is curently working\n".split("\n").join("<br />") +
              "- Search functionality for each column was implemented\n".split("\n").join("<br />") +
              "- Table pagination layout was updated and it's working properly\n".split("\n").join("<br />") +
              "- The functionality to display selected number of rows is working"
          },
          {
            title: 'Home page updates',
            description: "- Implemented button to customize widgets"
          },
        ]
      },
      {
        id: '2',
        modName: 'Mod 2023.04.04',
        releaseDate: 'Tuesday, April 4, 2023',
        note: [
          {
            title: 'Layout update',
            description: "- Create outbound order layout is shown\n".split("\n").join("<br />") +
            "- Release notes were updated"
          },
          {
            title: 'Code optimizations',
            description: "- A separate component for columns-filter was created\n".split("\n").join("<br />") +
              "- A separate component for multi select with search was created\n".split("\n").join("<br />") +
              "- Styles for filter button were improved"
          },
        ]
      },
      {
        id: '1',
        modName: 'Mod 2023.04.03',
        releaseDate: 'Monday, April 3, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Created a separate component for selectors"
          }
        ]
      },
    ]
  },
  {
    id: '1',
    name: 'March 2023',
    mod: [
      {
        id: '7',
        modName: 'Mod 2023.03.31',
        releaseDate: 'Friday, March 31, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Created separate component for the inputs, which was added in all right places"
          },
          {
            title: 'Layout update',
            description: '- Display spinner inside current stock table while data is loading'
          },
        ]
      },
      {
        id: '6',
        modName: 'Mod 2023.03.30',
        releaseDate: 'Thursday, March 30, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Created separate component for the buttons, which was added in all the right places\n".split("\n").join("<br />") +
              "- Changed unsuscribes using takeUntil\n".split("\n").join("<br />") +
              "- Deleted unused methods, imports, services and components\n".split("\n").join("<br />") +
              "- Deleted unused service"
          },
          {
            title: 'Layout update',
            description: '- Disabled dark mode'
          },
        ]
      },
      {
        id: '5',
        modName: 'Mod 2023.03.29',
        releaseDate: 'Wednesday, March 29, 2023',
        note: [
          {
            title: 'API Integration',
            description: "- API was for current stock table was integrated successfully\n".split("\n").join("<br />") +
              "- Changed apiUrl"
          },
          {
            title: 'Code optimizations',
            description: "- Set up the opening of the model window using MatDialog, deleted inline style for role details\n".split("\n").join("<br />") +
              "- Created separate routing modules for all pages\n".split("\n").join("<br />") +
            "- Deleted unused service"
          },
          {
            title: 'Layout update',
            description: '- Containers page layout is shown'
          },
        ]
      },
      {
        id: '4',
        modName: 'Mod 2023.03.28',
        releaseDate: 'Tuesday, March 28, 2023',
        note: [
          {
            title: 'Layout change',
            description: "- Profile pict changed to a blank profile picture"
          }
        ]
      },
      {
        id: '3',
        modName: 'Mod 2023.03.27',
        releaseDate: 'Monday, March 27, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Stock filter were added to current and history stock pages\n".split("\n").join("<br />") +
              "- Created separate component for the widget at home page, which is going to be customized in future\n".split("\n").join("<br />") +
              "- Created separate component for the pagination, which was added to tables\n".split("\n").join("<br />") +
              "- Improvement displaying sidebar menu and footer"
          }
        ]
      },
      {
        id: '2',
        modName: 'Mod 2023.03.24',
        releaseDate: 'Friday, March 24, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: "- Created separate component for user-form, which was added to settings and management pages\n".split("\n").join("<br />") +
              "- Created separate component for organisation-form, which was added to settings and management pages",
          }
        ]
      },
      {
        id: '1',
        modName: 'Mod 2023.03.23',
        releaseDate: 'Thursday, March 23, 2023',
        note: [
          {
            title: 'Code optimizations',
            description: '- Created a separate component for the title, which was added to all pages'
          }
        ]
      },

    ]
  },

]
