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
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCIsImtpZCI6Ik1yNS1BVWliZkJpaTdOZDFqQmViYXhib1hXMCJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMDNjZmYwOTQtMmQzYS00NGE0LWFmNTgtZGI2MzgzYjM4NDVkLyIsImlhdCI6MTY0MzE5ODQyNCwibmJmIjoxNjQzMTk4NDI0LCJleHAiOjE2NDMyMDQwMjUsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFDT3FxdG53RUVPVUZEQ2RyeWd6Ykt2VnJoekRiVGpQbmpnd3lQSi85RUZ4K28wNWZ2NkVQMWdtOEhlL0RLazBBIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiTSIsImdpdmVuX25hbWUiOiJKYWlwcmFzYXRoIiwiaXBhZGRyIjoiMTU3LjQ5LjIzMC4xOTgiLCJuYW1lIjoiSmFpcHJhc2F0aCBNIiwib2lkIjoiYTM1ODliNTgtY2I5Mi00M2IxLWE2ZDUtZTMzMmIzNjBkYzJlIiwicHVpZCI6IjEwMDMyMDAwQzhGN0M5QTciLCJyaCI6IjAuQVZRQWxQRFBBem90cEVTdldOdGpnN09FWFFrQUFBQUFBQUFBd0FBQUFBQUFBQUJVQUM0LiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInNpZ25pbl9zdGF0ZSI6WyJrbXNpIl0sInN1YiI6Inl0VVRxclNvc3hvYkNtNFBNUmRQLWM2b3lwcWkzVnhWY21WV2JNVVhDd2MiLCJ0aWQiOiIwM2NmZjA5NC0yZDNhLTQ0YTQtYWY1OC1kYjYzODNiMzg0NWQiLCJ1bmlxdWVfbmFtZSI6ImphaXByYXNhdGguY2IxOUBiaXRzYXRoeS5hYy5pbiIsInVwbiI6ImphaXByYXNhdGguY2IxOUBiaXRzYXRoeS5hYy5pbiIsInV0aSI6Ijlpck1qTHRBMVUtNkQtVnh4YVVZQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.CCyH-O3pxenevAZONtcAFxSxQOx3HKbZQC4NDkXV_fJ9BLlKpvzUaOcXtGIJs4IkNPinzF7HJD-tdAp7wsfjDKtSd97TJ7d0fa_gZ7EysxV0eUp_U2N0d7ZwZ0j7EFqN2m9YAsX0EsVJQHZQRisM-3-CbAuE3B_A9YhBRyZnSH0WrWZjwOXKoSbgZmKpNQAjn3mMuxqbE6q3uwKJ11dDaSASoxMKcgSbE3oKstNWWrulaRAYNOqTXsMxE4Kvp5tDCNv82Uro-z6qBXQl8UGnAf4K9j4oJ8CePC9OA14c-VJFSF4wDK0zCuzH6uvp9LIph3BpLfWnSUhLMnYwq5EgbA',
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
