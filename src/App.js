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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDNjZmYwOTQtMmQzYS00NGE0LWFmNTgtZGI2MzgzYjM4NDVkLyIsImlhdCI6MTY0MzIwNDI0NSwibmJmIjoxNjQzMjA0MjQ1LCJleHAiOjE2NDMyMDkwNjYsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFFYjBjTi8rbWwxU3RVZEZhajI3WFkrenpyU1dmR3hEYTNSS3BnS1RRUlFqTFNheWtiSTR3TkFiMHJZV0R1QkpVIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTSIsImdpdmVuX25hbWUiOiJKYWlwcmFzYXRoIiwiaXBhZGRyIjoiMTU3LjQ5LjIzMC4xOTgiLCJuYW1lIjoiSmFpcHJhc2F0aCBNIiwib2lkIjoiYTM1ODliNTgtY2I5Mi00M2IxLWE2ZDUtZTMzMmIzNjBkYzJlIiwicHVpZCI6IjEwMDMyMDAwQzhGN0M5QTciLCJyaCI6IjAuQVZRQWxQRFBBem90cEVTdldOdGpnN09FWFFrQUFBQUFBQUFBd0FBQUFBQUFBQUJVQUM0LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Inl0VVRxclNvc3hvYkNtNFBNUmRQLWM2b3lwcWkzVnhWY21WV2JNVVhDd2MiLCJ0aWQiOiIwM2NmZjA5NC0yZDNhLTQ0YTQtYWY1OC1kYjYzODNiMzg0NWQiLCJ1bmlxdWVfbmFtZSI6ImphaXByYXNhdGguY2IxOUBiaXRzYXRoeS5hYy5pbiIsInVwbiI6ImphaXByYXNhdGguY2IxOUBiaXRzYXRoeS5hYy5pbiIsInV0aSI6InVyR2NoN1kxaGthUktxaTUxTThjQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.O_q6wdFgvrOtEP5npGpVGqLYtNj_hishKqq6mqrAfp3aYSRF2R0xyYGzVIizNKoSwpTNAKxidfszLcmgFQdxoqVero7ABkOxDy9bjoKm8WGsZOAlTJ2Sx6tbnSuGqnWkglqzv-FsTqDDo2mwH4T68K9TEYwcWZRbWVOfmPLfpH5zjPnzemdv3TAKtC_PGeszehVF77M9vxKn8YZNCTHn6wM58vbgjXmuOt4Rw9nO3LGw25gn1j7p7kjpRuPYkjJtxUmlB3CtLF9z997DwmEjkTIrlZTIacN3Kf2sACza_fcv1nIM1ebdd0Zo4AfSRiTlJVd_huqENY5DkZ-Xk5niYg',
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
