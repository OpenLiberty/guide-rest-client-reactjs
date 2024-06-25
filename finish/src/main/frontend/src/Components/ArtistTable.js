// tag::react-library[]
import React, { useEffect, useMemo, useState } from 'react';
// end::react-library[]
// tag::axios-library[]
import axios from 'axios';
// end::axios-library[]
// tag::react-table[]
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel, flexRender} from '@tanstack/react-table'; 
// end::react-table[]
// tag::custom-style[]
import '../Styles/table.css'
// end::custom-styly[]

// tag::ArtistTable[]
export function ArtistTable() {
  // end::ArtistTable[]

  // tag::posts[]
  const [posts, setPosts] = useState([]);
  // end::posts[]
  // tag::sorting[]
  const [sorting, setSorting] = useState([]);
  // end::sorting[]
  // tag::pagination[]
  const [pagination, setPagination] = useState({pageIndex: 0, pageSize: 4});
  // end::pagination[]

  // tag::get-posts[]
  const GetArtistsInfo = async () => {
    try {
      // tag::axios[]
      const response = await axios.get('http://localhost:9080/artists');
      // end::axios[]
      // tag::response-data[]
      const artists = response.data;
      // end::response-data[]
      const processedData = [];
      // tag::for-artists[]
      for (const artist of artists) {
        // tag::spread-one[]
        const { albums, ...rest } = artist;
        // end::spread-one[]
        for (const album of albums) {
          // tag::spread-two[]
          processedData.push({ ...rest, ...album });
          // end::spread-two[]
        }
      };
      //tag::setState[]
      setPosts(processedData);
      // end::setState[]
    } catch (error) {
      console.log(error);
    }
  };
  // end::get-posts[]

  // tag::useMemo[]
  const data = useMemo(() => [...posts], [posts]);
  // end::useMemo[]

  // tag::table-info[]
  const columns = useMemo(() => [{
    header: 'Artist Info',
    columns: [
      {
        accessorKey: 'id',
        header: 'Artist ID'
      },
      {
        accessorKey: 'name',
        header: 'Artist Name'
      },
      {
        accessorKey: 'genres',
        header: 'Genres'
      }
    ]
  },
  {
    header: 'Albums',
    columns: [
      {
        accessorKey: 'ntracks',
        header: 'Number of Tracks'
      },
      {
        accessorKey: 'title',
        header: 'Title'
      }
    ]
  }
  ], []
  );
  // end::table-info[]

  // tag::useReactTable[]
  const tableInstance = useReactTable({ 
          columns, 
          data,
          // tag::getCoreRowModel[]
          getCoreRowModel: getCoreRowModel(), 
          // end::getCoreRowModel[]
          // tag::getPaginationRowModel[]
          getPaginationRowModel: getPaginationRowModel(), 
          // end::getPaginationRowModel[]
          // tag::getSortedRowModel[]
          getSortedRowModel: getSortedRowModel(), 
          // end::getSortedRowModel[]
          state:{
            sorting: sorting,
            pagination: pagination,
          },
          onSortingChange: setSorting,
          onPaginationChange: setPagination,
          }); 
  // end::useReactTable[]

  // tag::destructuring[]
  const {
    getHeaderGroups, 
    getRowModel,
    getState,
    setPageIndex,
    setPageSize,
    getCanPreviousPage,
    getCanNextPage,
    previousPage,
    nextPage,
    getPageCount,
  } = tableInstance;
  // end::destructuring[]

  const {pageIndex, pageSize} = getState().pagination;

  // tag::useEffect[]
  useEffect(() => {
    GetArtistsInfo();
  }, []);
  // end::useEffect[]

  // tag::return-table[]
  return (
    <>
      <h2>Artist Web Service</h2>
      {/* tag::table[] */}
      <table>
        <thead>
          {getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id} colSpan={header.colSpan} onClick={header.column.getToggleSortingHandler()}>
                  {header.isPlaceholder ? null :(
                    <div>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      {
                        {
                          asc: " 🔼",
                          desc: " 🔽",
                        }[header.column.getIsSorted() ?? null]
                      }
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* end::table[] */}
      <div className="pagination">
        <button onClick={() => previousPage()} disabled={!getCanPreviousPage()}>
          {'Previous'}
        </button>{' '}
        <div className="page-info">
          <span>
            Page{' '}
            <strong>
              {pageIndex + 1} of {getPageCount()}
            </strong>{' '}
          </span>
          <span>
            | Go to page:{' '}
            <input
              type="number"
              defaultValue={pageIndex + 1}
              onChange={e => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                setPageIndex(page);
              }}
              style={{ width: '100px' }}
            />
          </span>{' '}
          <select
            value={pageSize}
            onChange={e => {
              setPageSize(Number(e.target.value))
            }}
          >
            {[4, 5, 6, 9].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => nextPage()} disabled={!getCanNextPage()}>
          {'Next'}
        </button>{' '}
      </div>
    </>
  );
  // end::return-table[]
}
