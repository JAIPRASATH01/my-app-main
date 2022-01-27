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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDNjZmYwOTQtMmQzYS00NGE0LWFmNTgtZGI2MzgzYjM4NDVkLyIsImlhdCI6MTY0MzI3MTk4MSwibmJmIjoxNjQzMjcxOTgxLCJleHAiOjE2NDMyNzY3MDAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUErWUlXRmxKTHM1S3BkRVlvU09sZ1gxWnllQ2d4cnpDZGJpdHYzUVRJRzY5Sjl2YUI0ODdIU0ZKbnNMZEE4em1tIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTSIsImdpdmVuX25hbWUiOiJKYWlwcmFzYXRoIiwiaXBhZGRyIjoiMTU3LjQ5LjIxNC45MyIsIm5hbWUiOiJKYWlwcmFzYXRoIE0iLCJvaWQiOiJhMzU4OWI1OC1jYjkyLTQzYjEtYTZkNS1lMzMyYjM2MGRjMmUiLCJwdWlkIjoiMTAwMzIwMDBDOEY3QzlBNyIsInJoIjoiMC5BVlFBbFBEUEF6b3RwRVN2V050amc3T0VYUWtBQUFBQUFBQUF3QUFBQUFBQUFBQlVBQzQuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoieXRVVHFyU29zeG9iQ200UE1SZFAtYzZveXBxaTNWeFZjbVZXYk1VWEN3YyIsInRpZCI6IjAzY2ZmMDk0LTJkM2EtNDRhNC1hZjU4LWRiNjM4M2IzODQ1ZCIsInVuaXF1ZV9uYW1lIjoiamFpcHJhc2F0aC5jYjE5QGJpdHNhdGh5LmFjLmluIiwidXBuIjoiamFpcHJhc2F0aC5jYjE5QGJpdHNhdGh5LmFjLmluIiwidXRpIjoiTk9JeXgzc2pHa3FSR24tSDl6VThBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.a__aXXQh-5r7z1vhtL6pR-BdpqAi78AQm30SAP4fOmGYI25DjqJ7gvWDvtMqGY21SRexgrtG7jtVGpgJE5AdBnIK218CcVEZwz71MoERIq37UmHGk1MzxCnKkwZqwhcrZ2DTy-qqqqZ76gjX-d9BHhfxZTKwuRmLbpXCSwUZwcE5PNYseepKBP0theU0j072gz_OPUodDmuvd1Ck-sNHmTuC9HFQRYnEq0jxyKcnm_d6F1-mKfpwnUkEQhRagsZJyDPJHEA3vU1XuDwRLMGuZtVNqKRybd5SwMLo4Va_yVHHnIW6FM7tqJS-7HtiJpi2pPh64PHHEeYgqnozCXR6Nw',
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
