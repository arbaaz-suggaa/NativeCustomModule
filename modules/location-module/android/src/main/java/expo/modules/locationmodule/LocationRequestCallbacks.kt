package expo.modules.locationmodule

import android.location.Location
import expo.modules.kotlin.exception.CodedException

interface LocationRequestCallbacks {
    fun onLocationChanged(location: Location) {}
    fun onLocationError(cause: CodedException) {}
    fun onRequestSuccess() {}
    fun onRequestFailed(cause: CodedException) {}
}