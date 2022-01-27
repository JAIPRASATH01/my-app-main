import logo from './logo.svg';
import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'ff3578ac-d3bb-4355-9d3c-b5ed22f8887a',
            embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=76d3ff8a-a7da-40e8-af98-3d0513fb24f6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19',
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDNjZmYwOTQtMmQzYS00NGE0LWFmNTgtZGI2MzgzYjM4NDVkLyIsImlhdCI6MTY0MzI2NDAyMiwibmJmIjoxNjQzMjY0MDIyLCJleHAiOjE2NDMyNjkxMjYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUF5RjQzaGJRSFhkdW56ZVJYZkM0UzhZQmJBanpSeUEzdkVYTHJsdHVxSzN3YkJFcUdsb0tXNmNUV2xLYTRqR3JqIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTSIsImdpdmVuX25hbWUiOiJKYWlwcmFzYXRoIiwiaXBhZGRyIjoiMTU3LjQ5LjIxNC45MyIsIm5hbWUiOiJKYWlwcmFzYXRoIE0iLCJvaWQiOiJhMzU4OWI1OC1jYjkyLTQzYjEtYTZkNS1lMzMyYjM2MGRjMmUiLCJwdWlkIjoiMTAwMzIwMDBDOEY3QzlBNyIsInJoIjoiMC5BVlFBbFBEUEF6b3RwRVN2V050amc3T0VYUWtBQUFBQUFBQUF3QUFBQUFBQUFBQlVBQzQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoieXRVVHFyU29zeG9iQ200UE1SZFAtYzZveXBxaTNWeFZjbVZXYk1VWEN3YyIsInRpZCI6IjAzY2ZmMDk0LTJkM2EtNDRhNC1hZjU4LWRiNjM4M2IzODQ1ZCIsInVuaXF1ZV9uYW1lIjoiamFpcHJhc2F0aC5jYjE5QGJpdHNhdGh5LmFjLmluIiwidXBuIjoiamFpcHJhc2F0aC5jYjE5QGJpdHNhdGh5LmFjLmluIiwidXRpIjoiSXJWRkI1bmxZa2VUcUY2WmlOVXZBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.Ed2FIMi_2y46RNwLAQH6NnkIJ2U3sEMWp7-Po_YEwZRltoMbnN_ToyWHjZ90jmVx2YTlTuOYZc7ec-Lg-sa80BevI_1NWndtq7Y6kbgfEfNI7mrm_BrnposAptfpLe7Zhx-H5Kp2_sELH4HRplwADTkh764cP3_yuh7tLlSG1sh8UK-MErARyAEEGvpVDJ_yV4Zy5zzzm7Fxkvw0gnxFZ7KhOexXSVw9Dgb0nz_TYMEQIYJNCaD1CTDQGKdLB-FdBKfW9IrRZx6zOZdmIrMHJ46g6j6CC2vJI-upZ30z7xixf1DZsJEU0wM4IEO_gc1ChusMxlaOzVr2ItvbWIBo8Q',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
              
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;
