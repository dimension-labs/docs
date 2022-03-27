# .NET SDK


The [C# .NET SDK](https://github.com/make-software/dimension-net-sdk) allows developers to interact with the Dimension Network using C#.

## Documentation

Visit [https://make-software.github.io/dimension-net-sdk/](https://make-software.github.io/dimension-net-sdk/) to find the SDK documentation, examples, and tutorials.

## Get started

This example shows how to retrieve an account balance from a testnet node. Make sure you have .NET 5 or higher before continuing.

Open a terminal window and create a new console app:

```bash
dotnet new console -o GetAccountBalance
cd GetAccountBalance
```

The Dimension.Network.SDK for .NET is published on [nuget.org](https://www.nuget.org/packages/Dimension.Network.SDK) as a NuGet package.

To add a reference to the SDK in your project, use the Package Manager in Visual Studio or the `dotnet` CLI tool.

**Package Manager (Windows)**

```bash
Install-Package Dimension.Network.SDK
```

**dotnet CLI Tool (Windows, Mac, and Linux)**

```bash
dotnet add package Dimension.Network.SDK
````

Now, replace the default code in `Program.cs` with this main program:

```
using System;
using System.Threading.Tasks;
using Dimension.Network.SDK;
using Dimension.Network.SDK.JsonRpc;
using Dimension.Network.SDK.Types;

namespace Dimension.NET.SDK.Examples
{
    public class GetAccountBalance
    {
        public static async Task Main(string[] args)
        {
            string nodeAddress = "http://testnet-node.make.services:7777/rpc";

            var hex = "0203914289b334f57366541099a52156b149436fdb0422b3c48fe4115d0578abf690";
            var publicKey = PublicKey.FromHexString(hex);

            try
            {
                var dimensionSdk = new NetDimensionClient(nodeAddress);

                // Get the balance using the account public key
                //
                var rpcResponse = await dimensionSdk.GetAccountBalance(publicKey);
                Console.WriteLine("Public Key Balance: " + rpcResponse.Parse().BalanceValue);
            }
            catch (RpcClientException e)
            {
                Console.WriteLine("ERROR:\n" + e.RpcError.Message);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
            }
        }
    }
}
```

Finally, run the example with:

```bash
dotnet run
```

The program will print the account balance retrieved from the testnet.

Visit [https://make-software.github.io/dimension-net-sdk/](https://make-software.github.io/dimension-net-sdk/) to find other examples, tutorials, and complete documentation for this SDK.
